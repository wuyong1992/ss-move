import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplyJobResultComponent} from './apply-job-result/apply-job-result.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule.forRoot(),
    ],
    declarations: [
        ApplyJobResultComponent
    ],
    exports: [
        ApplyJobResultComponent
    ],
    entryComponents:[
        ApplyJobResultComponent
    ]
})
export class ComponentsModule {
}
