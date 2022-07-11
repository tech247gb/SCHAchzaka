import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { TreatmentsService } from "src/app/services/global/treatments.service";
import { HomeService } from "../../home.service";

@Component({
  selector: "app-task-row",
  templateUrl: "./task-row.component.html",
  styleUrls: ["./task-row.component.scss"],
})
export class TaskRowComponent implements OnInit {
  @Input() task;
  today = moment().format("YYYY-MM-DD");

  constructor(
    public treatmentsService: TreatmentsService,
    public homeService: HomeService,
    public router: Router
  ) {}

  ngOnInit() {}
  async taskInfo(equipment, treatmentType) {
    // let treatments = await this.homeService.getTreatment(
    //   equipment,
    //   treatmentType
    // );
    // localStorage.task = JSON.stringify(this.task);
    // localStorage.treatmentType = JSON.stringify(treatmentType);
    // this.router.navigate(["/task-page"]);
  }
}
