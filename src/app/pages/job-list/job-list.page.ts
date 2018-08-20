import {Component, OnInit} from '@angular/core';
import {NavController, PopoverController} from '@ionic/angular';
import {ApplyJobResultComponent} from '../../components/apply-job-result/apply-job-result.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-job-list',
    templateUrl: './job-list.page.html',
    styleUrls: ['./job-list.page.scss'],
})
export class JobListPage implements OnInit {

    /**
     * userInfoFull 用户信息是否完整
     */
    userInfoFull: boolean = false;

    constructor(private popoverCtrl: PopoverController,
                private navCtrl: NavController,
                private router:Router) {
    }

    ngOnInit() {

        console.log('find jobs init');
    }


    /**
     * 申请工作
     * @param id
     */
    async applyJob(id: number, event) {
        event.stopPropagation();
        const  popover = await this.popoverCtrl.create({
            component:ApplyJobResultComponent,
            ev: event,
            componentProps:{userInfoFull: true}
        });
        await popover.present();
    }

    gotoJobDetail(jobId: number) {
        this.router.navigate(['/job-detail',jobId]);
    }


    onScroll(event) {
        console.log(event);
        let content = document.querySelector('ion-content') as any;
        console.log(content.getScrollElement().scrollTop);
        console.log(content.getScrollElement().scrollLeft);
        setTimeout(
            () => {
                // content.getScrollElement().scrollToTop();
            },
            1000
        );
    }

}
