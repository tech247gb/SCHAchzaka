import { LoadingController, Platform } from "@ionic/angular";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SettingsService } from "./global/setting.service";
import { LocationCrudService } from "./location.crud";
import { CategorieCrudService } from "./categorie.crud";
import { BarcodeCrudService } from "./barcode.crud";
import { UrlqueueCrudService } from "./urlqueue/urlqueue.crud";
import { EquipmentCrudService } from "./equipment/equipment.crud";
import { EquipmentX2CrudService } from "./equipmentX2/equipmentX2.crud";
import { EquipmentX3CrudService } from "./equipmentX3/equipmentX3.crud";
import { EquipmentAppCrudService } from "./equipmentApp/equipmentApp.crud";
import { EquipmentAllCrudService } from "./equipmentAll/equipmentAll.crud";
import { TreatmentCrudService } from "./treatment/treatment.crud";
import { ChecklistCrudService } from "./checklist/checklist.crud";

@Injectable({
  providedIn: "root",
})
export class SyncAPIService {
  public webDb;
  public dayeletDetails;
  public preloaderCounter: number = 0;
  public mainLoader;

    constructor(
    public setting: SettingsService,
    public loadingCtrl: LoadingController,
    private http: HttpClient,
    public locationCrudService: LocationCrudService,
    public categorieCrudService : CategorieCrudService,
    public barcodeCrudService : BarcodeCrudService,
    public platform: Platform,
    private urlCrud: UrlqueueCrudService,
    private equipmentCrud: EquipmentCrudService,
    private equipmentX2Crud: EquipmentX2CrudService,
    private equipmentX3Crud: EquipmentX3CrudService,
    private equipmentAppCrud:EquipmentAppCrudService,
    private equipmentAllCrud:EquipmentAllCrudService,
    private treatmentService:TreatmentCrudService,
    private checkListService:ChecklistCrudService,

  ) {
    this.webDb = (<any>window).openDatabase(
      "Dayalot",
      "1.0",
      "1234",
      2 * 1024 * 1024
    );
  }

  async startSync() {
    this.getLocation();
    this.getCategorie();
    this.getBarcode();
    this.addUrls();
    this.addEquipment();
    this.addEquipment2();
    this.addEquipment3();
    this.addEquipmentApp();
    this.addEquipmentAll();
    this.addTreatment();
    this.addCL();
  }

  async getLocation() {
    console.log("getLocation");
    try {
      return new Promise((resolve, reject) => {
        this.http
          .get(this.setting.globalURL + "getLocations")
          .toPromise()
          .then((res) => {
            console.log("getLocation", res);
            this.locationCrudService.createDB(res, this.webDb);
          })
          .catch((err) => console.log("error:", err));
      });
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  async getCategorie() {
    console.log("getCategorie");
    try {
      return new Promise((resolve, reject) => {
        this.http
          .get(this.setting.globalURL + "getEquipmentCategories")
          .toPromise()
          .then((res) => {
            console.log("getCategorie", res);
            this.categorieCrudService.createDB(res, this.webDb);
          })
          .catch((err) => console.log("error:", err));
      });
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  async getBarcode() {
    console.log("getBarcode");
    try {
      return new Promise((resolve, reject) => {
        this.http
          .get(this.setting.globalURL + "getEquipments?lean=X")
          .toPromise()
          .then((res) => {
            console.log("getCategorie", res["equipment"]);
            this.barcodeCrudService.createDB(res["equipment"], this.webDb);
          })
          .catch((err) => console.log("error:", err));
      });
    } catch (err) {
      console.log(err);
    } finally {
    }
  }
  async addUrls() {
    let loading = await this.loadingCtrl.create({ message: "...בטעינה" });
    loading.present();
    try {
      
      this.urlCrud.createDB(this.webDb,1)
    } catch (err) {
      console.log(err);
    } finally {
      loading.dismiss();
    }
  }
  async addEquipment() {
    let loading = await this.loadingCtrl.create({ message: "...בטעינה" });
    loading.present();
    try {
      this.equipmentCrud.createDB(this.webDb,1)
    } catch (err) {
      console.log(err);
    } finally {
      loading.dismiss();
    }
  }
  async addEquipment2() {
    let loading = await this.loadingCtrl.create({ message: "...בטעינה" });
    loading.present();
    try {
      this.equipmentX2Crud.createDB(this.webDb,1)
    } catch (err) {
      console.log(err);
    } finally {
      loading.dismiss();
    }
  }
  async addEquipment3() {
    let loading = await this.loadingCtrl.create({ message: "...בטעינה" });
    loading.present();
    try {
      this.equipmentX3Crud.createDB(this.webDb,1)
    } catch (err) {
      console.log(err);
    } finally {
      loading.dismiss();
    }
  }
  async addEquipmentApp() {
    let loading = await this.loadingCtrl.create({ message: "...בטעינה" });
    loading.present();
    try {
      this.equipmentAppCrud.createDB(this.webDb,1)
    } catch (err) {
      console.log(err);
    } finally {
      loading.dismiss();
    }
  }
  async addEquipmentAll() {
    let loading = await this.loadingCtrl.create({ message: "...בטעינה" });
    loading.present();
    try {
      this.equipmentAllCrud.createDB(this.webDb,1)
    } catch (err) {
      console.log(err);
    } finally {
      loading.dismiss();
    }
  }
  async addTreatment() {
    let loading = await this.loadingCtrl.create({ message: "...בטעינה" });
    loading.present();
    try {
      this.treatmentService.createDB(this.webDb,1)
    } catch (err) {
      console.log(err);
    } finally {
      loading.dismiss();
    }
  }
  async addCL() {
    let loading = await this.loadingCtrl.create({ message: "...בטעינה" });
    loading.present();
    try {
      this.checkListService.createDB(this.webDb,1)
    } catch (err) {
      console.log(err);
    } finally {
      loading.dismiss();
    }
  }
 
}
