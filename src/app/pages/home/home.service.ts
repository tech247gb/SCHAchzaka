import { SettingsService } from "./../../services/global/setting.service";
import { LoadingController } from "@ionic/angular";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { ZBar, ZBarOptions } from "@ionic-native/zbar/ngx";
import { SyncAPIService } from "src/app/services/sync.service";
import { UtilsService } from "src/app/services/utils.service";
import { EquipmentService } from "src/app/services/equipment/equipment.service";
import { Network } from "@ionic-native/network/ngx";
import { EquipmentX2CrudService } from "src/app/services/equipmentX2/equipmentX2.crud";
import { EquipmentX2Service } from "src/app/services/equipmentX2/equipmentX2.service";
import { EquipmentX3Service } from "src/app/services/equipmentX3/equipmentX3.service";
import { EquipmentAppService } from "src/app/services/equipmentApp/equipmentApp.service";
import { EquipmentAllCrudService } from "src/app/services/equipmentAll/equipmentAll.crud";
import { EquipmentAllService } from "src/app/services/equipmentAll/equipmentAll.service";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  public webDb;
  httpOptions = {
    headers: new HttpHeaders({
      //   "Content-Type": "application/json",
      //   // "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,PUT,OPTIONS",
      //   // "Access-Control-Allow-Headers":
      //   //   "Origin, Content-Type, X-Auth-Token, content-type",
      //   "Access-Control-Allow-Origin": "*",
    }),
  };

  constructor(
    public loadingCtrl: LoadingController,
    private http: HttpClient,
    private zbar: ZBar,
    public setting: SettingsService,
    public utils: UtilsService,
    public equiService: EquipmentService,
    public equiAppService: EquipmentAppService,
    public equiX2Service: EquipmentX2Service,
    public equiX3Service: EquipmentX3Service,
    public equiAllService:EquipmentAllService,
    public network:Network,

    public syncAPIService: SyncAPIService
  ) {
    this.startSync();
  }

  options: ZBarOptions = {
    flash: "off",
    drawSight: false,
    text_title: "נא הכנס ברקוד", // Android only
    text_instructions: "מצמצת. פספספת. אז בבקשה!", // Android only
  };

  startSync() {
    this.syncAPIService.startSync();
    // this.getTasks();
  }

  async getTasks(
    dateFrom,
    dateTo,
    TreatmentType?,
    location?,
    categorie?,
    barcode?,
  ) {
    let loading = await this.loadingCtrl.create({ message: "...בטעינה" });
    let user = localStorage.empNum;
    let URL =
      this.setting.globalURL +
      "getEquipments?employee=" +
      user +
      "&dateFrom=" +
      dateFrom +
      "&dateTo=" +
      dateTo;
    if (
      TreatmentType != null &&
      TreatmentType != "search" &&
      TreatmentType != "barcode"
    )
      URL = URL + "&treatmentType=" + TreatmentType;
    if (location != null && location != "") URL = URL + "&stand=" + location;
    if (categorie != null && categorie != "") URL = URL + "&eqart=" + categorie;
    if (barcode != null && barcode != "") URL = URL + "&equipment=" + barcode;
    loading.present();
   
    try {
      return new Promise((resolve, reject) => {
        this.http
          // .get("assets/jsons/tasks.json", this.httpOptions)
          .get(
            URL
            // this.setting.globalURL +
            // // "getTreatments?employee=" +
            // "getEquipments?employee=" +

            // user +
            // "&dateFrom=" +
            // dateFrom +
            // "&dateTo=" +
            // dateTo
          )
          .toPromise()
          .then((res) => {
            let resultjson = this.utils.getArrayFromJson(res);
            
            if(resultjson.length>0){
              if(TreatmentType==='X1'){
                this.equiService.deleteFromDb();
                resultjson.forEach(element => {
                  this.equiService.insertUrlToDb(element);
                });
              }else if(TreatmentType==='X2'){
                this.equiX2Service.deleteFromDb();
                resultjson.forEach(element => {
                  this.equiX2Service.insertUrlToDb(element);
                });
              }else if(TreatmentType==='X3'){
                this.equiX3Service.deleteFromDb();
                resultjson.forEach(element => {
                  this.equiX3Service.insertUrlToDb(element);
                });
              }else if(TreatmentType==='search'){
                this.equiAllService.deleteFromDb();
                resultjson.forEach(element => {
                  this.equiAllService.insertUrlToDb(element);
                });
              }
              console.log('resultjson',resultjson);
            }
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

  async getTipulim() {
    let loading = await this.loadingCtrl.create({ message: "...בטעינה" });
    try {
      return new Promise((resolve, reject) => {
        this.http
          // .get("assets/jsons/tasks.json", this.httpOptions)
          .get(this.setting.globalURL + "getAppTreatments")
          .toPromise()
          .then((res) => {
            let resultjson = this.utils.getArrayFromJson(res);
            if(resultjson.length>0){
            this.equiAppService.deleteFromDb();
            console.log('resultjson',resultjson);
            resultjson.forEach(element => {
              this.equiAppService.insertUrlToDb(element);
            });
            console.log(res);
          }
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

  async getTreatment(equipment, treatmentType) {
    if(this.network.type !=='none' ) {
      let loading = await this.loadingCtrl.create({ message: "...בטעינה" });
      loading.present();
      try {
        return new Promise((resolve, reject) => {
          this.http
            // .get("assets/jsons/tasks.json", this.httpOptions)
            .get(
              this.setting.globalURL +
                "getPreviousTreatments?equipment=" +
                equipment
              // +
              //   "&type=" +
              //   treatmentType
            )
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

  scanBarcode(returnFn) {
    this.zbar
      .scan(this.options)
      .then((result) => {
        returnFn(result);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  getLocations = (location) => {
    this.webDb = this.syncAPIService.webDb;
    let Location = "%" + location + "%";
    try {
      return new Promise((resolve, reject) => {
        this.webDb.transaction(function (tx) {
          tx.executeSql(
            "SELECT * FROM locations WHERE ktext LIKE ?",
            [Location],
            function (tx, results) {
              let arr = [...results.rows];
              resolve(arr);
            }
          );
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  getCategories = (categorie) => {
    this.webDb = this.syncAPIService.webDb;
    let Categorie = "%" + categorie + "%";
    try {
      return new Promise((resolve, reject) => {
        this.webDb.transaction(function (tx) {
          tx.executeSql(
            "SELECT * FROM categorie WHERE eartx LIKE ?",
            [Categorie],
            function (tx, results) {
              let arr = [...results.rows];
              resolve(arr);
            }
          );
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  async getBarcodes(barcode) {
    this.webDb = this.syncAPIService.webDb;
    let Barcode = "%" + barcode + "%";
    try {
      return new Promise((resolve, reject) => {
        this.webDb.transaction(function (tx) {
          tx.executeSql(
            "SELECT * FROM barcode WHERE equipment LIKE ?",
            [Barcode],
            function (tx, results) {
              let arr = [...results.rows];
              resolve(arr);
            }
          );
        });
      });
    } catch (err) {
      console.log(err);
    }
  }
}
