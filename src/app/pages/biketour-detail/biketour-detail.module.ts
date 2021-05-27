import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiketourDetailPageRoutingModule } from './biketour-detail-routing.module';

import { BiketourDetailPage } from './biketour-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiketourDetailPageRoutingModule
  ],
  declarations: [BiketourDetailPage]
})
export class BiketourDetailPageModule {}
