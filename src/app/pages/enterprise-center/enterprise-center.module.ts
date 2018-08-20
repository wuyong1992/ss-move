import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnterpriseCenterPage } from './enterprise-center.page';

const routes: Routes = [
  {
    path: '',
    component: EnterpriseCenterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnterpriseCenterPage]
})
export class EnterpriseCenterPageModule {}
