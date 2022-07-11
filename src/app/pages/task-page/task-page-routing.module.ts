import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskPagePage } from './task-page.page';

const routes: Routes = [
  {
    path: '',
    component: TaskPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskPagePageRoutingModule {}
