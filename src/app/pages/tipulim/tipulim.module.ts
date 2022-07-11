import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TipulimPageRoutingModule } from "./tipulim-routing.module";

import { TipulimPage } from "./tipulim.page";
import { TipulComponent } from "./components/tipul/tipul.component";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipulimPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TipulimPage, TipulComponent],
})
export class TipulimPageModule {}
