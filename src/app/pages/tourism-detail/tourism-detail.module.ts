import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourismDetailPageRoutingModule } from './tourism-detail-routing.module';

import { TourismDetailPage } from './tourism-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourismDetailPageRoutingModule
  ],
  declarations: [TourismDetailPage]
})
export class TourismDetailPageModule {}
