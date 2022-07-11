import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TaskReportPageRoutingModule } from "./task-report-routing.module";

import { TaskReportPage } from "./task-report.page";
import { ComponentsModule } from "src/app/components/components.module";
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskReportPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TaskReportPage]
})
export class TaskReportPageModule {}
