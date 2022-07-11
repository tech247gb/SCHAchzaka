import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskReportPage } from './task-report.page';

const routes: Routes = [
  {
    path: '',
    component: TaskReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskReportPageRoutingModule {}
