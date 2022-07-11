import { HomeService } from "./../home/home.service";
import { Component, OnInit } from "@angular/core";
import { TreatmentService } from "src/app/services/treatment/treatment.service";
import { Network } from "@ionic-native/network/ngx";

@Component({
  selector: "app-task-page",
  templateUrl: "./task-page.page.html",
  styleUrls: ["./task-page.page.scss"],
})
export class TaskPagePage implements OnInit {
  public task = {};
  treatmentType;
  public treatments;
  constructor(public homeService: HomeService,
    public treatmentService:TreatmentService,
    public network : Network) {}

  ngOnInit() {
    this.task = JSON.parse(localStorage.task);
    this.taskInfo(this.task["equipment"], this.task["treatmentType"]);
  }

  async taskInfo(equipment, treatmentType) {
  
    if(this.network.type!=='none'){
      this.treatments = await this.homeService.getTreatment(
        equipment,
        treatmentType
      );
      this.treatments.forEach(element => {
        this.treatmentService.deleteFromDbById(element);
        this.treatmentService.insertUrlToDb(element);
      });
    }else{
      this.treatments=await this.treatmentService.getTreatment(equipment,treatmentType);
    }
    console.log(this.treatments);
    localStorage.task = JSON.stringify(this.task);
    // localStorage.treatmentType = JSON.stringify(treatmentType);
  }
}
