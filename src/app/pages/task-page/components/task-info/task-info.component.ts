import { Component, OnInit, Input } from "@angular/core";
import { TreatmentsService } from "src/app/services/global/treatments.service";

@Component({
  selector: "app-task-info",
  templateUrl: "./task-info.component.html",
  styleUrls: ["./task-info.component.scss"]
})
export class TaskInfoComponent implements OnInit {
  @Input() taskInfo;
  constructor(public treatmentsService: TreatmentsService) {}

  ngOnInit() {
  }
}
