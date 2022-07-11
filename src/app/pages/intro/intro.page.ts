import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { LoginService } from "src/app/services/global/login.service";
import { HomeService } from "../home/home.service";
import * as moment from "moment";
import { EquipmentService } from "src/app/services/equipment/equipment.service";
import { EquipmentX2Service } from "src/app/services/equipmentX2/equipmentX2.service";
import { EquipmentX3Service } from "src/app/services/equipmentX3/equipmentX3.service";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.page.html",
  styleUrls: ["./intro.page.scss"],
})
export class IntroPage implements OnInit {
  graph = { g1: 0, g2: 0, g3: 0 };
  dataLandingPage;
  today;
  today_X1:any;
  today_X2;
  today_X3;
  week;
  week_X1;
  week_X2;
  week_X3;
  week_X1_total;
  week_X2_total;
  week_X3_total;

  equiId = 1000059;
  constructor(
    public loginService: LoginService,
    public platform: Platform,
    public homeService: HomeService,
    public equiService: EquipmentService,
    public equiX2Service:EquipmentX2Service,
    public equiX3Service:EquipmentX3Service,
    public router: Router
  ) {
    let dateFrom = "2000-01-01";
    let dateTo = moment().add(30, "d").format("YYYY-MM-DD");;
    this.homeService.getTasks(
      dateFrom,
      dateTo,
      'search'
    );
    this.homeService.getTipulim();
  }

  async ngOnInit() {
    this.today_X1= await this.equiService.getTaskX1Count();
    this.today_X2= await this.equiX2Service.getTaskX2Count();
    this.today_X3= await this.equiX3Service.getTaskX3Count();
     //this.getLandingPage(localStorage.empNum);
  }

 async ionViewWillEnter() {
    this.getLandingPage(localStorage.empNum);
    this.today_X1= await this.equiService.getTaskX1Count();
    this.today_X2= await this.equiX2Service.getTaskX2Count();
    this.today_X3= await this.equiX3Service.getTaskX3Count();
     //this.getLandingPage(localStorage.empNum);
  }
  async getLandingPage(employy) {
    this.dataLandingPage = await this.loginService.getLandingPage(employy);
    console.log("L  : ", this.dataLandingPage);
    this.today = { ...this.dataLandingPage.today };
    this.today_X3 = this.today["X3"];
    this.today_X2 = this.today["X2"];
    this.today_X1 = this.today["X1"];
    this.week = this.dataLandingPage.week;
    this.week_X1 = this.week["X1"];
    this.week_X2 = this.week["X2"];
    this.week_X3 = this.week["X3"];
    this.week_X1_total = this.week["Total"]["X1"];
    this.week_X2_total = this.week["Total"]["X2"];
    this.week_X3_total = this.week["Total"]["X3"];
    this.graph = {
      g1: (this.week_X1 * 100) / this.week_X1_total,
      g2: (this.week_X2 * 100) / this.week_X2_total,
      g3: (this.week_X3 * 100) / this.week_X3_total,
    };
    console.log(this.graph);
  }
  openBarCode() {
    if (!this.platform.is("cordova")) {
      this.getEquiDetails(this.equiId);
    } else {
      this.homeService.scanBarcode(this.getEquiDetails);
    }
  }

  getEquiDetails = (equiId) => {
    localStorage.barcode = equiId;
    this.router.navigate(["/home/true/true/barcode"]);
  };
  corginPnimi() {
    localStorage.type = "X1";
    this.router.navigate(["/home/true/true/X1"]);
  }

  corginChitzoni() {
    localStorage.type = "X2";
    this.router.navigate(["/home/true/true/X2"]);
  }

  corginMeandes() {
    localStorage.type = "X3";
    this.router.navigate(["/home/true/true/X3"]);
  }

  pnimiWeek() {
    localStorage.type = "X1";
    this.router.navigate(["/home/true/false/X1"]);
  }

  chitzoniWeek() {
    localStorage.type = "X2";
    this.router.navigate(["/home/true/false/X2"]);
  }

  meandesWeek() {
    localStorage.type = "X3";
    this.router.navigate(["/home/true/false/X3"]);
  }

  openTipulimList() {
    this.router.navigate(["/tipulim"]);
  }
}
