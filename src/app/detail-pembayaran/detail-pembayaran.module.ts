import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailPembayaranPage } from './detail-pembayaran.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPembayaranPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailPembayaranPage]
})
export class DetailPembayaranPageModule {}
