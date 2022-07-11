import { LoginService } from 'src/app/services/global/login.service';

import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppUpdate } from '@ionic-native/app-update/ngx';
import { UrlqueueService } from './services/urlqueue/urlqueue.service';
import { Network } from "@ionic-native/network/ngx";
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  version:any;
  public user;
  public appPages = [
    {
      title: "עמוד הבית",
      url: "/intro",
      icon: "home",
    },

    {
      title: "התנתק",
      url: "/login",
      icon: "log-out",
    },
  ];
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    private appVersion: AppVersion,
    private network: Network,
    private urlService:UrlqueueService,
    private appUpdate: AppUpdate,
    public loginService: LoginService
  ) {
    this.initializeApp();
    platform.ready().then(() => {
      this.listenConnection();
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      const updateUrl = 'https://dysch-dev.sch.co.il:9000/SCHAchzaka.xml';
      this.appUpdate.checkAppUpdate(updateUrl).then(update => {
        alert("Update Status:  "+update.msg);
      }).catch(error=>{
        console.log(error);
         alert("Error: "+error.msg);
      });
      this.appVersion.getVersionCode().then((res:any )=> {
        this.version = res/1000;
        console.log(res);
      }).catch(error => {
        console.log(error);
      });
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString("#999999");
      this.splashScreen.hide();
    });

    if (localStorage.user) {
      this.user = JSON.parse(localStorage.user);
    } else {
      this.user = {};
    }
  }

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
    
    if (localStorage.user && localStorage.user != "" &&
      localStorage.system && localStorage.system != "") {
      this.loginService.setSystem();
      this.router.navigate(["/intro"]);
    }
  }
  private listenConnection(): void {
    this.network.onConnect()
      .subscribe((res) => {
        console.log(res);
        if(res.type=='online'){
          this.urlService.apiCallList();
        }
      });
  }
}
