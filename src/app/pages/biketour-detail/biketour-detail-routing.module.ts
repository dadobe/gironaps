import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiketourDetailPage } from './biketour-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BiketourDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiketourDetailPageRoutingModule {}
