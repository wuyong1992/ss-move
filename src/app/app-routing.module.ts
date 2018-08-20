import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'job-detail/:jobId', loadChildren: './pages/job-detail/job-detail.module#JobDetailPageModule' },
  { path: 'recruit-create', loadChildren: './pages/recruit-create/recruit-create.module#RecruitCreatePageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
