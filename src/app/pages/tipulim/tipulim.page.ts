import { HomeService } from "./../home/home.service";
import { Component, OnInit } from "@angular/core";
import { Network } from "@ionic-native/network/ngx";
import { EquipmentAppService } from "src/app/services/equipmentApp/equipmentApp.service";

@Component({
  selector: "app-tipulim",
  templateUrl: "./tipulim.page.html",
  styleUrls: ["./tipulim.page.scss"],
})
export class TipulimPage implements OnInit {
  constructor(public homeService: HomeService,
    public equiAppService:EquipmentAppService,
    public network:Network) {}
  public tipulim: any;

  async ngOnInit() {
    if(this.network.type==='none' ) {
      this.tipulim=await this.equiAppService.getTasks();
      
    }else{
      this.tipulim = await this.homeService.getTipulim();
    }
    console.log(this.tipulim);
    
  }
}
