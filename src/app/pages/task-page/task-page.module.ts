import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TaskPagePageRoutingModule } from "./task-page-routing.module";

import { TaskPagePage } from "./task-page.page";
import { LastTasksComponent } from "./components/last-tasks/last-tasks.component";
import { TaskInfoComponent } from "./components/task-info/task-info.component";
import { ComponentsModule } from "src/app/components/components.module";

import { TaskFormComponent } from '../task-report/components/task-form/task-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskPagePageRoutingModule,
    ComponentsModule,
    
  ],
  declarations: [
    TaskPagePage,
    TaskInfoComponent,
    LastTasksComponent,
    TaskFormComponent
  ],
})
export class TaskPagePageModule {}
