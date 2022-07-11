import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [HeaderComponent],
  imports: [IonicModule, CommonModule],
  providers: [],
  exports: [HeaderComponent],
  entryComponents: []
})
export class ComponentsModule {}
