import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "./../../environments/environment";
import { SettingsService } from '../services/global/setting.service'; 
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UrlqueueService } from '../services/urlqueue/urlqueue.service';
import { Network } from "@ionic-native/network/ngx";
import { appInitialize } from '@ionic/angular/app-initialize';

@Injectable()

export class HttpInterceptor implements HttpInterceptor {
    httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,PUT,OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, content-type, Authorization, authorization ",
        "Access-Control-Allow-Origin": "*"
      })
    };
    constructor(public setting: SettingsService, private http: HttpClient,public network:Network,public urlService: UrlqueueService,) {}
    intercept(request: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
      request = this.getHeaders(request);
      if(this.network.type=='none' ) {
        return;
      }
     
      return next.handle(request);
    }
    getHeaders(request: HttpRequest < any > ): HttpRequest < any > {
      // return request;
      console.log('header authorization')
      const now = new Date();
      let tokenData = "";
      let localToken = localStorage.token ? JSON.parse(localStorage.token) : '';
      console.log(localToken.value)
      tokenData = localToken && localToken.value ? localToken.value : '';
      console.log(tokenData)
      if (tokenData) {
        console.log('Token exist')
        if (now.getTime() > localToken.expiry) {
          localStorage.removeItem('token')
          console.log('Token expired')
        }        
      }
      let apiName = request.url.split('/')[4];
      if ((!tokenData || tokenData === "") && apiName !== 'login') {
        this.http
          .post(
            this.setting.globalServerURL +
            "user/login", {
              employee: localStorage.username,
              dob: localStorage.pass
            }
          )
          .toPromise()
          .then((res) => {
            console.log(res)
            tokenData = res['token'];
            const item = {
              value: tokenData,
              expiry: now.getTime() + (environment.loginTimeout * 60 * 60 * 1000)
            }
            localStorage.setItem('token', JSON.stringify(item));
            console.log('New token updated')
            if(localStorage.username && localStorage.pass) {
                console.log(' API')
                this.http
                .get(
                  this.setting.globalURL +
                  "getEmployee?employee=" +
                  localStorage.username +
                  "&password=" +
                  localStorage.pass    
                )
                .toPromise()
                .then((res) => {
                    console.log('Localstorage removed')
                    localStorage.removeItem('username')
                    localStorage.removeItem('pass')
                })
                .catch((err) => alert(err.message));
            }
        })
        .catch((err) => alert(err.message));
      }
      let serverUrlPrefix = (this.setting.globalServerURL).split('/')[2]+'/';
      console.log(serverUrlPrefix);
      let requestPrefix = request.url.split('/')[2]+'/'    
      if (apiName !== 'login' && serverUrlPrefix === requestPrefix) {
        if(!request.headers.get('Flag') && this.network.type==='none' &&request.method=='POST'){
            if(request.body.codeList){
              request.body.codeList=JSON.stringify(request.body.codeList)
            }
            let value={
              'url':request.url,
              'request':JSON.stringify(request.body),
            }
            this.urlService.insertUrlToDb(value);
        }
        request = request.clone({
          headers: request.headers.delete('Flag')
        });
        return request.clone({
          setHeaders: {
            Authorization: `Bearer ${tokenData}`,
          },
        });
      } else {
        return request;
      }
      //}   
    }
  }