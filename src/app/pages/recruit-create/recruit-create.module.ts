import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {RecruitCreatePage} from './recruit-create.page';
import {NgZorroAntdModule} from 'ng-zorro-antd';

const routes: Routes = [
    {
        path: '',
        component: RecruitCreatePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        NgZorroAntdModule
    ],
    declarations: [RecruitCreatePage]
})
export class RecruitCreatePageModule {
}
