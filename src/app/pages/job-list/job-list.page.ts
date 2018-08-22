import {Component, OnInit} from '@angular/core';
import {LoadingController, NavController, PopoverController, ToastController} from '@ionic/angular';
import {ApplyJobResultComponent} from '../../components/apply-job-result/apply-job-result.component';
import {Router} from '@angular/router';
import {JobService} from '../../service/job.service';
import {JobVO} from '../../model/job-vo';
import {JobCategory} from '../../model/job-category';
import {ToastUtil} from '../../util/toast-util';
import {UserService} from '../../service/user.service';

@Component({
    selector: 'app-job-list',
    templateUrl: './job-list.page.html',
    styleUrls: ['./job-list.page.scss'],
})
export class JobListPage implements OnInit {

    jobVOList: JobVO[] = [];
    jobCategoryList: JobCategory[] = [];
    isInfoComplete: boolean = null;

    hasNextPage: boolean = true;
    reqParams = {
        jobCategoryId: '',
        payPeriodType: '',
        page: 0
    };

    currentSegment: string = 'all';

    constructor(private popoverCtrl: PopoverController,
                private navCtrl: NavController,
                private loadingCtrl: LoadingController,
                private toastCrtrl: ToastController,
                private router: Router,
                private jobService: JobService,
                private userService: UserService) {
    }

    ngOnInit() {

        this.initIsInfoComplete();
        this.initJobVOList();
    }


    /**
     * 申请工作
     * @param jobId
     * @param event
     */
    applyJob(jobId: number, event) {
        event.stopPropagation();
        this.showApplyResult(this.isInfoComplete);
        this.userService.applyJob(jobId).subscribe(
            res => {
                console.log(res);
                if (res.code == 0) {
                    this.jobVOList.forEach(
                        item => {
                            if (item.jobId == jobId) {
                                item.userApplyStatus = 1;
                                return;
                            }
                        }
                    );
                }
            }
        );
    }

    async showApplyResult(applyResutle: boolean) {
        const popover = await this.popoverCtrl.create({
            component: ApplyJobResultComponent,
            ev: event,
            componentProps: {result: applyResutle}
        });
        await popover.present();
    }


    gotoJobDetail(jobId: number) {
        this.router.navigate(['/job-detail', jobId]);
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

    private async initJobVOList() {
        const loading = await this.loadingCtrl.create({
            content: '大爷，您稍等',
        });
        await loading.present();
        this.jobVOList = [];
        this.jobService.findJobList(this.reqParams).subscribe(
            res => {
                if (res.code == 0) {
                    console.log(res);
                    if (res.data.content.length > 0) {
                        res.data.content.forEach(
                            item => {
                                this.jobVOList.push(item);
                            }
                        );
                    }
                    if (res.data.last) {
                        this.hasNextPage = false;
                    }
                    loading.dismiss();
                }
            }
        );
    }

    loadData(event) {
        if (this.hasNextPage) {
            this.reqParams.page++;
            this.jobService.findJobList(this.reqParams).subscribe(
                res => {
                    if (res.code == 0) {
                        if (res.data.content.length > 0) {
                            res.data.content.forEach(
                                item => {
                                    this.jobVOList.push(item);
                                }
                            );
                        }
                        if (!res.data.last) {
                            this.hasNextPage = true;
                        } else {
                            this.hasNextPage = false;
                        }
                        event.target.complete();
                    }
                }
            );
        } else {
            event.target.complete();
        }
    }

    segmentSelect(event) {
        let selectSegment = event.target.value;
        this.currentSegment = selectSegment;
        if (selectSegment == 'all') {

        } else if (selectSegment == 'payPeriodType') {
            // 点击了结算周期

        } else if (selectSegment == 'jobCategory') {
            // 点击了招聘分类
            if (this.jobCategoryList.length == 0) {
                this.jobService.getJobCategoryList().subscribe(
                    res => {
                        if (res.code == 0) {
                            this.jobCategoryList = res.data;
                        } else {
                            ToastUtil.presentToast(this.toastCrtrl, res.msg);
                        }
                    }
                );
            }
        }
    }

    selectJobCategoryId(jobCategoryId) {
        this.reqParams.jobCategoryId = jobCategoryId;
        this.reqParams.page = 0;
        this.initJobVOList();
        this.currentSegment = 'all';
    }

    selectPayPeriodType(type) {
        this.reqParams.payPeriodType = type;
        this.reqParams.page = 0;
        this.initJobVOList();
        this.currentSegment = 'all';
    }

    clearJobCategoryId() {
        console.log('sss');
        this.reqParams.jobCategoryId = '';
        this.reqParams.page = 0;
        this.initJobVOList();
        this.currentSegment = 'all';
    }

    clearPayPeriodType() {
        console.log('sss');
        this.reqParams.payPeriodType = '';
        this.reqParams.page = 0;
        this.initJobVOList();
        this.currentSegment = 'all';
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
