import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {JobListPage} from './job-list.page';
import {ComponentsModule} from '../../components/components.module';

const routes: Routes = [
    {
        path: '',
        component: JobListPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ],
    declarations: [JobListPage]
})
export class JobListPageModule {
}
