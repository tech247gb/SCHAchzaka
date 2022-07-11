import { Component, OnInit, Input } from "@angular/core";
import { TreatmentsService } from "src/app/services/global/treatments.service";

@Component({
  selector: "app-last-tasks",
  templateUrl: "./last-tasks.component.html",
  styleUrls: ["./last-tasks.component.scss"],
})
export class LastTasksComponent implements OnInit {
  @Input() taskTreatments;
  public Treatments: Array<object>;
  public longTextShow = false;
  constructor(public treatmentsService: TreatmentsService) {}

  ngOnInit() {
    this.Treatments = this.taskTreatments;
    // for (let index = 0; index < this.taskTreatments.length; index++) {
    //   this.taskTreatments[i]["longText"] = false;
    // }
  }

  longText(i) {
    if (this.taskTreatments[i]["longText"]) {
      this.taskTreatments[i]["longText"] = !this.taskTreatments[i]["longText"];
    } else {
      this.taskTreatments[i]["longText"] = true;
    }
  }
}
