import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipulimPage } from './tipulim.page';

const routes: Routes = [
  {
    path: '',
    component: TipulimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipulimPageRoutingModule {}
