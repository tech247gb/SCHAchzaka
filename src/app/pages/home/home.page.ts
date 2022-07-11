import { ActivatedRoute, Router } from "@angular/router";
import { HomeService } from "./home.service";
import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { TreatmentsFilter } from "src/app/services/global/treatmentsFilter.service";
import { Platform } from "@ionic/angular";
import { TreatmentsService } from "src/app/services/global/treatments.service";
import { Network } from "@ionic-native/network/ngx";
import { EquipmentService } from "src/app/services/equipment/equipment.service";
import { EquipmentX2Service } from "src/app/services/equipmentX2/equipmentX2.service";
import { EquipmentX3Service } from "src/app/services/equipmentX3/equipmentX3.service";
import { EquipmentAllService } from "src/app/services/equipmentAll/equipmentAll.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  returnFn;
  tasks: any;
  tasksLength: any;
  filterArray: any;
  rbTime = "1";
  equiId = 1000110;
  btnSelected = 1;
  btnTypeSelected;
  time = { time: false, category: false };
  chorgim;
  type;
  dateFrom;
  dateTo;
  public location;
  public locationForSearch;
  public showListLocation = false;
  public locations: any;

  public showListCategorie = false;
  public Categorie;
  public CategorieForSearch;
  public Categories: any;

  public showListBarcode = false;
  public barcode;
  public barcodeForSearch;
  public barcodes: any;

  public noType: boolean;
  info = {
    startDay: moment().format("YYYY-MM-DD"),
    endDay: moment().add(7, "d").format("YYYY-MM-DD"),
    search: "",
  };
  constructor(
    public homeService: HomeService,
    public equiService: EquipmentService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public platform: Platform,
    public treatmentsFilter: TreatmentsFilter,
    public network:Network,
    public equiX2Service:EquipmentX2Service,
    public equiX3Service:EquipmentX3Service,
    public equiAllService:EquipmentAllService,
    public treatmentsService: TreatmentsService
  ) {
  
    let test = moment("2020/05/12").isBetween(
      "2020-07-12",
      "2020-09-12",
      "days",
      "[]"
    );

    console.log("Test : ", test);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let checkBox = params["time"];
      console.log(checkBox);
      if (checkBox == "true") this.rbTime = "1";
      else this.rbTime = "2";
      this.chorgim = params["chorgim"];
      this.type = params["type"];
      if (this.type == "search") {
        this.noType = true;
        this.dateFrom = "2000-01-01";
        this.dateTo = moment().add(360, "d").format("YYYY-MM-DD");
      } else if (this.type == "barcode") {
        this.noType = true;
        this.dateFrom = "2000-01-01";
        this.dateTo = moment().add(360, "d").format("YYYY-MM-DD");
        this.getTasks(localStorage.barcode);
      }
      console.log("type: ", this.type);
      if (this.chorgim == "true") {
        this.btnSelected = 1;
        this.rbTime = "2";
        this.dateFrom = "2000-01-01";
        this.dateTo = moment().format("YYYY-MM-DD");
        console.log(this.dateFrom, this.dateTo);
      } else if (checkBox == "true") {
        this.btnSelected = 2;
        this.rbTime = "2";
        this.dateFrom = moment().format("YYYY-MM-DD");
        this.dateTo = moment().add(30, "d").format("YYYY-MM-DD");
      }
    });
    console.log(this.dateTo);

    // if (this.rbTime != "2") {
    if (this.type != "barcode") this.getTasks();
    // }
  }

  ionViewWillEnter() {
    if (this.type == "barcode") this.getTasks(localStorage.barcode);
    else this.getTasks();
  }
  async getTasks(equiId?) {  
    console.log(this.network.type,this.type);
    if(this.network.type==='none' ) {
      if(this.type==='X1'){
        this.tasks = await this.equiService.getTasks(); 
        this.tasksLength = this.tasks.length;
        localStorage.taskLength=this.tasksLength;
      }else if(this.type==='X2'){
        this.tasks = await this.equiX2Service.getTasks(); 
        this.tasksLength = this.tasks.length;
        localStorage.taskX2Length=this.tasksLength;
      }else if(this.type==='X3'){
        this.tasks = await this.equiX3Service.getTasks();
        this.tasksLength = this.tasks.length;
        localStorage.taskX3Length=this.tasksLength; 
      }else if(this.type==='search'){
        this.tasks = await this.equiAllService.getTasks();
      }
    }else{
      if (equiId) {
        this.tasks = await this.homeService.getTasks(
          this.dateFrom,
          this.dateTo,
          this.type,
          this.locationForSearch,
          this.CategorieForSearch,
          equiId
        );
      } else {
        this.tasks = await this.homeService.getTasks(
          this.dateFrom,
          this.dateTo,
          this.type,
          this.locationForSearch,
          this.CategorieForSearch,
          this.barcodeForSearch
        );
      }
    }
    console.log(this.tasks)
    this.filterArray = [...this.tasks];
    
  }

  searchvalue(event) {
    console.log("SearchValue : ", event.target.name, event.target.value);
    this.filterService();
  }

  filterService() {
    console.log(this.info);
    let filterArray = this.treatmentsFilter.filterTreatmentsByArray(
      this.tasks,
      this.info
    );
    console.log(filterArray);
    this.tasks = [...filterArray];
    // this.returnFn.emit(filterArray);
  }
  getFilterArrayFromFilterComponent(arr) {
    this.filterArray = arr;
  }

  cbChange(change) {
    console.log("1:", this.time, change);
    if (change == 1 && this.time.time) {
      console.log("3");
      this.time.time = true;
      this.time.category = false;
    } else if (change == 1 && !this.time.time) {
      console.log("4");
      this.time.category = false;
    }

    if (change == 2 && this.time.category) this.time.time = true;
    else if (change == 2 && !this.time.category) this.time.time = false;

    console.log("2:", this.time, change);
  }
  openBarCode() {
    if (!this.platform.is("cordova")) {
      this.getEquiDetails(this.equiId);
    } else {
      this.homeService.scanBarcode(this.getEquiDetails);
    }
  }
  getEquiDetails = (equiId) => {
    // console.log(this.tasks);
    this.info.search = equiId;
    // this.filterService();
    this.getTasks(equiId);
  };

  btnSelect(num) {
    this.btnSelected = num;
    console.log(num);
    if (num == 1) {
      this.chorgim = "true";
      this.dateFrom = "2000-01-01";
      this.dateTo = moment().format("YYYY-MM-DD");

      this.getTasks();
    } else if (num == 2) {
      this.chorgim = null;
      this.dateFrom = moment().format("YYYY-MM-DD");
      this.dateTo = moment().add(7, "d").format("YYYY-MM-DD");
      this.getTasks();
    } else if (num == 3) {
      this.chorgim = null;
      this.dateFrom = moment().format("YYYY-MM-DD");
      this.dateTo = moment().add(30, "d").format("YYYY-MM-DD");
      this.getTasks();
    } else if (num == 4) {
      this.chorgim = null;
      this.dateFrom = moment(this.info.startDay).format("YYYY-MM-DD");
      this.dateTo = moment(this.info.endDay).format("YYYY-MM-DD");
      this.getTasks();
    }
  }

  btnTypeSelect(num) {
    this.btnTypeSelected = num;
    console.log(num);
    if (num == 1) {
      this.type = "X1";
      this.getTasks();
    } else if (num == 2) {
      this.type = "X2";
      this.getTasks();
    } else if (num == 3) {
      this.type = "X3";
      this.getTasks();
    }
  }

  getLocationChange() {
    this.showListLocation = true;
    this.getLocations();
  }

  setLocation(location) {
    this.location = location.ktext;
    this.locationForSearch = location.stand;
    this.locations = [];
    this.getLocation();
  }

  async getLocation() {
    this.getTasks();
    console.log("Work");
  }

  async getLocations() {
    this.locations = await this.homeService.getLocations(this.location);
  }

  getCategorieChange() {
    this.showListCategorie = true;
    this.getCategories();
  }

  setCategorie(Categorie) {
    this.Categorie = Categorie.eartx;
    this.CategorieForSearch = Categorie.eqart;
    this.Categories = [];
    this.getCategorie();
  }

  async getCategorie() {
    this.getTasks();
    console.log("Work");
  }

  async getCategories() {
    this.Categories = await this.homeService.getCategories(this.Categorie);
  }

  getBarcodeChange() {
    this.showListBarcode = true;
    this.getBarcodes();
  }

  setBarcode(barcode) {
    this.barcode = barcode["equipment"];
    this.barcodeForSearch = this.barcode;
    this.barcodes = [];
    this.getBarcode();
  }

  async getBarcode() {
    this.getTasks();
    console.log("Work");
  }

  async getBarcodes() {
    this.barcodes = await this.homeService.getBarcodes(this.barcode);
  }

  async taskInfo(task, equipment, treatmentType) {
    localStorage.task = JSON.stringify(task);
    console.log('kjhhkkhj',task);
    localStorage.treatmentType = JSON.stringify(treatmentType);
   
    let treatments = await this.homeService.getTreatment(
      equipment,
      treatmentType
    );
    this.router.navigate(["/task-page"]);
  }
}
