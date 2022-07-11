import { UrlqueueCrudService } from "./urlqueue.crud";
import { Injectable } from "@angular/core";
import { SyncAPIService } from "../sync.service";
import { HttpClient, HttpHeaders,HttpParams } from "@angular/common/http";
import { UtilsService } from "../global/utils.service"; 
import { Network } from "@ionic-native/network/ngx";



@Injectable({
  providedIn: "root",
})

export class UrlqueueService {
  public webDb: any;
  httpOptions = {
    headers: new HttpHeaders()
    .set('Flag','1')
  };
  params = new HttpParams();

  constructor(
    public urlqueueCrud: UrlqueueCrudService,
    public syncAPIService: SyncAPIService,
    public utils: UtilsService,
    private http: HttpClient,
    private network: Network,
  ) {
    
  }
  getUniqueId(parts: number): string {
    const stringArr = [];
    for(let i = 0; i< parts; i++){
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }

  insertUrlToDb = (item) => {
    this.webDb = this.syncAPIService.webDb;
    this.deleteByequi(localStorage.equipment);
    return new Promise((resolve, reject) => {
      this.webDb.transaction((t) => {
        t.executeSql(
          "INSERT INTO urlqueue (id,url, request,retry_count) VALUES (?,?,?,?)",
          [
            this.getUniqueId(5),
            item["url"],
            item["request"],
            localStorage.equipment,
          ],
          (t, results) => {
            console.log('jashdasd',results)
            // this.customerServer.sendCustomerToServer(item);
            resolve("success");
          },
          function (t, error) {
            console.log("Error insert: " + error.message);
          }
        );
      });
    });
  };

   apiCallList = () => {
    this.webDb = this.syncAPIService.webDb;
    var params = new HttpParams();
    // Notice that I am re-assigning the params object
    params = params.append('queue', 'true'); 
    try {
      return new Promise((resolve, reject) => {
        this.webDb.transaction((tx) => {
          tx.executeSql(
            "SELECT * FROM urlqueue ",[],
            (tx, results) => {
              let resultjson = this.utils.getArrayFromJson(results.rows);
                if(resultjson.length>0){
                  resultjson.forEach(element => {
                    let value=JSON.parse(element.request);
                    if(value.codeList){
                      value.codeList=JSON.parse(value.codeList)
                    }
                    let apiName = element.url.split('/')[3];
                    if(apiName=='upload'){
                      element.request= JSON.parse(element.request)
                      console.log(element.request);
                      let blob=this.b64toBlob(element.request.image);
                      console.log(blob);
                      let formData = new FormData();
                      formData.append("treatmentType", element.request.treatmentType);
                      formData.append("equipment", element.request.equipment);
                      formData.append("image",blob, element.request.name);
                      value=formData;
                      var headers = new HttpHeaders();
                      headers.append(
                        "Content-Type",
                        "multipart/form-data;boundary=" + Math.random()
                      );
                      headers.append("Accept", "application/json");
                      this.httpOptions = {
                        headers,
                      };
                    } 
                    try {
                      return new Promise((resolve, reject) => {
                        this.http
                          .post(element.url, value,this.httpOptions)
                          .toPromise()
                          .then(res => {
                           this.deleteFromDb(element.id);
                            resolve(res);
                            console.log("resServer: ", res);
                          })
                          .catch(err => {
                            resolve("err");
                            if(element.retry_count<5) {
                              let retryVal=element;
                              this.deleteFromDb(element.id);
                              retryVal.retry_count+=1;
                              this.insertUrlToDb(retryVal);
                            }else{
                              this.deleteFromDb(element.id);
                            }
                          });
                      });
                    } catch (err) {
                      console.log(err);
                    }
                });
                }else{
                  // alert('You no apis pending in internal storage')
                }
               
              resolve(results.rows);
            }
          );
        });
      });
    } catch (err) {
      console.log(err);
    }
  }; 
deleteFromDb = (item) => {
  this.webDb = this.syncAPIService.webDb;
  console.log(item);
  return new Promise((resolve, reject) => {
    this.webDb.transaction((t) => {
      t.executeSql(
        "DELETE FROM urlqueue WHERE id = ?",
        [
          item,
        ],
        (t, results) => {
          console.log('jashdasd',results)
          // this.customerServer.sendCustomerToServer(item);
          resolve("success");
        },
        function (t, error) {
          console.log("Error insert: " + error.message);
        }
      );
    });
  });
};
deleteByequi = (item) => {
  this.webDb = this.syncAPIService.webDb;
  console.log(item);
  return new Promise((resolve, reject) => {
    this.webDb.transaction((t) => {
      t.executeSql(
        "DELETE FROM urlqueue WHERE retry_count = ?",
        [
          item,
        ],
        (t, results) => {
          console.log('jashdasd',results)
          // this.customerServer.sendCustomerToServer(item);
          resolve("success");
        },
        function (t, error) {
          console.log("Error insert: " + error.message);
        }
      );
    });
  });
};
b64toBlob(dataURI) {
  console.log(dataURI);
  var startIndex = dataURI.indexOf("base64,") + 7;
  var b64 = dataURI.substr(startIndex);
  var byteString = atob(b64);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: 'image/jpeg' });
}
  
}

