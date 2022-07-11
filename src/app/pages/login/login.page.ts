import { SettingsService } from './../../services/global/setting.service';
import { LoginService } from "./../../services/global/login.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { HomeService } from '../home/home.service';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { EquipmentX2Service } from 'src/app/services/equipmentX2/equipmentX2.service';
import { EquipmentX3Service } from 'src/app/services/equipmentX3/equipmentX3.service';
import * as moment from 'moment';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(public router: Router, 
    public homeService: HomeService,
    public equiService: EquipmentService,
    public equiX2Service:EquipmentX2Service,
    public equiX3Service:EquipmentX3Service,
    public loginService: LoginService,
     public settingsService:SettingsService) {}
  user = {
    number: "",
    password: "",
  };
  public systemSelected ;
  ngOnInit() {
    if (localStorage.user) {
      localStorage.user = "";
    }
  }

  async onSubmit() {
    const user=await this.loginService.getUser(this.user);
      localStorage.empNum = this.user.number;
      if (user ) {
        localStorage.user = JSON.stringify(user);
        let dateFrom = "2000-01-01";
        let dateTo = moment().add(30, "d").format("YYYY-MM-DD");;
        this.homeService.getTasks(
          dateFrom,
          dateTo,
          'X1'
        );
this.homeService.getTasks(
      dateFrom,
      dateTo,
      'X2'
    );
  this.homeService.getTasks(
      dateFrom,
      dateTo,
      'X3'
    );
     
    localStorage.taskLength=await this.equiService.getTaskX1Count();
    localStorage.taskX2Length=await this.equiX2Service.getTaskX2Count();
    localStorage.taskX3Length=await this.equiX3Service.getTaskX3Count();
        this.router.navigate(["/intro"]);
      } else {
        alert("משתמש לא קיים!!");
      }
  }

  systemSelect(num) {
    console.log("work ", num)
    localStorage.system = num;
    this.loginService.setSystem();
   
  }
}
