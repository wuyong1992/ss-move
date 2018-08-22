import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs.page';
import {HomePage} from '../pages/home/home.page';
import {StudentCenterPage} from '../pages/student-center/student-center.page';
import {JobListPage} from '../pages/job-list/job-list.page';
import {EnterpriseCenterPage} from '../pages/enterprise-center/enterprise-center.page';
import {WechatWebAuthGuard} from '../guard/wechat-web-auth.guard';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        canActivate: [
            WechatWebAuthGuard
        ],
        children: [
            {
                path: '',
                redirectTo: 'job-list',
                pathMatch: 'full'
            },
            {
                path: 'student-center',
                component: StudentCenterPage,

            },
            {
                path: 'job-list',
                component: JobListPage
            },
            {
                path: 'home',
                component: HomePage
            },
            {
                path: 'enterprise-center',
                component: EnterpriseCenterPage
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
