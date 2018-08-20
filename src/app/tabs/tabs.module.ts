import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs.router.module';

import {TabsPage} from './tabs.page';
import {HomePageModule} from '../pages/home/home.module';
import {StudentCenterPageModule} from '../pages/student-center/student-center.module';
import {JobListPageModule} from '../pages/job-list/job-list.module';
import {EnterpriseCenterPageModule} from '../pages/enterprise-center/enterprise-center.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        HomePageModule,
        StudentCenterPageModule,
        JobListPageModule,
        EnterpriseCenterPageModule
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
