import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourismDetailPage } from './tourism-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TourismDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourismDetailPageRoutingModule {}
