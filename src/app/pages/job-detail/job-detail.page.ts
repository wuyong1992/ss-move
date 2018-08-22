import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApplyJobResultComponent} from '../../components/apply-job-result/apply-job-result.component';
import {LoadingController, PopoverController, ToastController} from '@ionic/angular';
import {JobService} from '../../service/job.service';
import {ToastUtil} from '../../util/toast-util';
import {JobVO} from '../../model/job-vo';
import {UserService} from '../../service/user.service';

const moment = require('moment');

@Component({
    selector: 'app-job-detail',
    templateUrl: './job-detail.page.html',
    styleUrls: ['./job-detail.page.scss'],
})
export class JobDetailPage implements OnInit {

    isInfoComplete: boolean = null;
    updateTimeStr: string = '';

    jobVO = new JobVO();

    constructor(private acr: ActivatedRoute,
                private router: Router,
                private popoverCtrl: PopoverController,
                private toastCtrl: ToastController,
                private jobService: JobService,
                private loadingCtrl: LoadingController,
                private userService: UserService) {
    }

    ngOnInit() {
        this.initIsInfoComplete();
        moment.locale('zh_CN');
        this.acr.params.subscribe(
            data => {
                this.loadJobVO(data.jobId);
            }
        );
    }

    async applyJob(jobId: number, event) {
        event.stopPropagation();
        const popover = await this.popoverCtrl.create({
            component: ApplyJobResultComponent,
            ev: event,
            componentProps: {result: this.isInfoComplete}
        });
        await popover.present();

        this.userService.applyJob(jobId).subscribe(
            res => {
                console.log(res);
                if (res.code == 0) {
                    this.jobVO.userApplyStatus = 1;
                }
            }
        );
    }


    gotoFindJobs() {
        this.router.navigateByUrl('/job-list');
    }

    /**
     * 加载jobVO信息
     * @param jobId
     */
    async loadJobVO(jobId: number) {
        const loading = await this.loadingCtrl.create({
            content: '请骚等！',
        });
        await loading.present();
        this.jobService.getJobVO(jobId).subscribe(
            res => {
                if (res.code == 0) {
                    console.log(res);
                    this.jobVO = res.data;
                    this.updateTimeStr = moment(this.jobVO.updateTime).fromNow();
                } else {
                    ToastUtil.presentToast(this.toastCtrl, res.msg);
                }
                loading.dismiss();
            },
            error => {
                loading.dismiss();
            }
        );
    }

    private initIsInfoComplete() {
        this.userService.getUserInfo().subscribe(
            res => {
                if (res.code == 0) {
                    this.isInfoComplete = res.data.isInfoComplete == 1;
                }
            }
        );
    }
}
