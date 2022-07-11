import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { SettingsService } from "./setting.service";
import { ChecklistService } from "../checklist/checklist.service";

@Injectable({
  providedIn: "root",
})
export class TreatmentsService {
  constructor(
    public loadingCtrl: LoadingController,
    private http: HttpClient,
    public checkListService:ChecklistService,
    public setting: SettingsService
  ) {}
  today = new Date();
  getNameTreatments(treatmentsType) {
    switch (treatmentsType) {
      case "X1":
        return "טיפול פנימי";
        break;
      case "X2":
        return "טיפול חיצוני";
        break;
      case "X3":
        return "בדיקת מהנדס";
        break;
    }
  } //חדשה getCheckList, יש להעביר משתנה equipment
  async getCL(equipment) {
    try {
      return new Promise((resolve, reject) => {
        this.http
          // .get("assets/jsons/tasks.json", this.httpOptions)
          .get(this.setting.globalURL + "getCheckList?equipment=" + equipment)
          .toPromise()
          .then((res:any) => {
            res.equipment=equipment;
            this.checkListService.deleteFromDbById(equipment)
            this.checkListService.insertUrlToDb(res);
            resolve(res);
          })
          .catch((err) => console.log("error:", err));
      });
    } catch (err) {
      console.log(err);
    }
  }
  async setTreatment(Treatment) {
    console.log('service',Treatment);
    let loading = await this.loadingCtrl.create({ message: "...שולח טיפול" });
    loading.present();
    try {
      return new Promise((resolve, reject) => {
        this.http
          // .get("assets/jsons/tasks.json", this.httpOptions)
          .post(this.setting.globalURL + "updateTreatment", Treatment)
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
  getData(date) {
    // console.log(date, this.today);
    // if (date >= this.today) {
    //   return true;
    // } else return false;
  }
  getTaskLength(){
    return localStorage.taskLength;
  }
}
