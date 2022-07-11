import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { SettingsService } from "./setting.service";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(
    public loadingCtrl: LoadingController,
    private http: HttpClient,
    public setting: SettingsService
  ) {}
  async getUser(user) {
    let loading = await this.loadingCtrl.create({ message: "...בטעינה" });
    loading.present();
    localStorage.setItem('username',user["number"]);
    localStorage.setItem('pass', user["password"]);
    try {
      if(localStorage.token){
        const now = new Date();
        let localToken = localStorage.token ? JSON.parse(localStorage.token) : '';
        console.log(localToken.value)
        let tokenData = localToken && localToken.value ? localToken.value : '';
        if (tokenData) {
          if (now.getTime() > localToken.expiry) {
            localStorage.removeItem('token')
            console.log('Token expired')
          }
         
        }
      }
      return new Promise((resolve, reject) => {
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
            //insertMaterialsToDb
            resolve(res);
            // console.log("RES: ", res);
          })
          .catch((err) =>{
            alert(err.message);
            this.http.get("https://api.ipify.org/?format=json").subscribe((res:any)=>{
              alert(res.ip);
            });
          }
          
          );
      });
    } catch (err) {
      alert(err.message);
            this.http.get("https://api.ipify.org/?format=json").subscribe((res:any)=>{
              alert(res.ip);
            });
    } finally {
      loading.dismiss();
    }
  }

  setSystem() {
     if (localStorage.system == 1) {
      this.setting.globalURL = "https://192.168.101.219:9000/";
      this.setting.photoURL = this.setting.globalURL + "upload";
      console.log("setGlobalURL", localStorage.system, this.setting.globalURL, this.setting.photoURL);
    } else if (localStorage.system == 2) {
      this.setting.globalURL = "https://192.168.101.220:9000/";
      this.setting.photoURL = this.setting.globalURL + "upload";
      console.log("setGlobalURL", localStorage.system, this.setting.globalURL, this.setting.photoURL);
    } else if (localStorage.system == 3) {
      this.setting.globalURL = "https://appprod.sch.co.il:9000/";
      this.setting.photoURL = this.setting.globalURL + "upload";
      console.log("setGlobalURL", localStorage.system, this.setting.globalURL, this.setting.photoURL);
    }
  }

  async getLandingPage(emp) {
    let loading = await this.loadingCtrl.create({ message: "...בטעינה" });
    loading.present();
    try {
      return new Promise((resolve, reject) => {
        this.http
          // .get("assets/jsons/tasks.json", this.httpOptions)
          .get(this.setting.globalURL + "getLandingPage?employee=" + emp)
          .toPromise()
          .then((res) => {
            console.log(res);
            resolve(res);
          })
          .catch((err) => console.log("error:", err));
      });
    } catch (err) {
      console.log(err);
    } finally {
      loading.dismiss();
    }
  }
}
