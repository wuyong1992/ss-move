import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApplyJobResultComponent} from '../../components/apply-job-result/apply-job-result.component';
import {PopoverController} from '@ionic/angular';

@Component({
    selector: 'app-job-detail',
    templateUrl: './job-detail.page.html',
    styleUrls: ['./job-detail.page.scss'],
})
export class JobDetailPage implements OnInit {

    userInfoFull: boolean = false;

    constructor(private acr: ActivatedRoute,
                private router:Router,
                private popoverCtrl:PopoverController) {
    }

    ngOnInit() {
        this.acr.params.subscribe(
            data => {
                console.log(data);
            }
        );
    }

    async applyJob(id: number, event) {
        event.stopPropagation();
        const  popover = await this.popoverCtrl.create({
            component:ApplyJobResultComponent,
            ev: event,
            componentProps:{userInfoFull: false}
        });
        await popover.present();
    }


    gotoFindJobs() {
        this.router.navigateByUrl('/job-list');
    }
}
