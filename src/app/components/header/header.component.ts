import { Router } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { NavController } from "@ionic/angular";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  // date = formatDate(new Date(), "dd.MM.yyyy", "en");
  // time = formatDate(new Date(), "HH:mm", "en");
  user = { firstName: "", lastName: "" };
  constructor(public nav: NavController, public router: Router) {}

  ngOnInit() {
    if (localStorage.user) this.user = JSON.parse(localStorage.user);
  }

  back() {
    this.router.navigate(["/intro"]);
  }
}
