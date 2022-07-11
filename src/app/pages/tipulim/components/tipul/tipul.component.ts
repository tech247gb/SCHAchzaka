import { Component, Input, OnInit } from "@angular/core";
import { TreatmentsService } from "src/app/services/global/treatments.service";

@Component({
  selector: "app-tipul",
  templateUrl: "./tipul.component.html",
  styleUrls: ["./tipul.component.css"],
})
export class TipulComponent implements OnInit {
  @Input() tipul;
  constructor(public treatmentsService: TreatmentsService) {}

  ngOnInit() {}
}
