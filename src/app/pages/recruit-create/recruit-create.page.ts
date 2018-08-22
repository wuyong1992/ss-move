import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PickerController, ToastController} from '@ionic/angular';
import {JobCategory} from '../../model/job-category';
import {JobService} from '../../service/job.service';
import {UserService} from '../../service/user.service';
import {EnterpriseService} from '../../service/enterprise.service';
import {JobInfo} from '../../model/job-info';
import {ToastUtil} from '../../util/toast-util';

@Component({
    selector: 'app-recruit-create',
    templateUrl: './recruit-create.page.html',
    styleUrls: ['./recruit-create.page.scss'],
})
export class RecruitCreatePage implements OnInit {

    jobInfo = new JobInfo();
    payPeriodStr: string = '日结';

    startValue: Date = null;
    endValue: Date = null;
    endDateDisable: boolean = true;

    jobCategoryStr = '选择分类';
    jobCategoryList: JobCategory[] = [];
    jobCategoryOptions = [
        {
            text: '占位',
            value: 0,
            disabled: true
        }
    ];


    constructor(private router: Router,
                private pickerCtrl: PickerController,
                private toastCtrl: ToastController,
                private jobService: JobService,
                private userService: UserService,
                private enterpriseService: EnterpriseService) {
    }

    ngOnInit() {

        this.initJobCategoryList();


    }

    gotoEnterprise() {
        this.router.navigateByUrl('/enterprise-center');
    }

    disabledStartDate = (startValue: Date): boolean => {
        if (!startValue || !this.endValue) {
            return false;
        }
        return startValue.getTime() > this.endValue.getTime();
    };

    disabledEndDate = (endValue: Date): boolean => {
        if (!endValue || !this.startValue) {
            return false;
        }
        return endValue.getTime() <= this.startValue.getTime();
    };

    onStartChange(date: Date): void {
        this.startValue = date;
        if (this.startValue != null) {
            this.endDateDisable = false;
        }
        this.jobInfo.startTime = this.startValue;
    }

    onEndChange(date: Date): void {
        this.endValue = date;
        this.jobInfo.endTime = this.endValue;
    }


    async pickerPayPeriod(event) {
        event.stopPropagation();
        const payPeriodPicker = await this.pickerCtrl.create({
            buttons: [
                {
                    text: '取消',
                    role: 'Cancel',
                    cssClass: 'secondary',
                    handler: (data) => {
                        console.log('cancel:', data);
                    }
                },
                {
                    text: '确定',
                    role: 'Okay',
                    handler: (data) => {
                        console.log('ok:', data);
                        this.payPeriodStr = data.payPeriodPicker.text;
                        this.jobInfo.payPeriodType = data.payPeriodPicker.value;
                    }
                }
            ],
            columns: [
                {
                    name: 'payPeriodPicker',
                    options: [
                        {
                            text: '日结',
                            value: 1,
                            disabled: true
                        },
                        {
                            text: '日结',
                            value: 1,
                        },
                        {
                            text: '周结',
                            value: 2,
                        },
                        {
                            text: '月结',
                            value: 3,
                        },
                    ],
                    selectedIndex: 1
                },
            ],
            cssClass: 'secondary'
        });
        payPeriodPicker.present();

    }


    async pickerJobCategory(event) {
        event.stopPropagation();
        const jobCategoryPicker = await this.pickerCtrl.create({
            buttons: [
                {
                    text: '取消',
                    role: 'Cancel',
                    cssClass: 'secondary',
                    handler: (data) => {
                        console.log('cancel:', data);
                    }
                },
                {
                    text: '确定',
                    role: 'Okay',
                    handler: (data) => {
                        console.log('ok:', data);
                        this.jobCategoryStr = data.jobCategoryPicker.text;
                        this.jobInfo.jobCategoryId = data.jobCategoryPicker.value;
                    }
                }
            ],
            columns: [
                {
                    name: 'jobCategoryPicker',
                    options: this.jobCategoryOptions,
                    selectedIndex: 1
                },
            ],
            cssClass: 'secondary'
        });
        jobCategoryPicker.present();

    }

    /**
     * 初始化工作分类
     */
    private initJobCategoryList() {
        this.jobService.getJobCategoryList().subscribe(
            res => {
                if (res.code == 0) {
                    this.jobCategoryList = res.data;
                    this.jobCategoryList.forEach(
                        item => {
                            this.jobCategoryOptions.push({
                                text: item.categoryName,
                                value: item.categoryId,
                                disabled: false
                            });
                        }
                    );
                }
            }
        );
    }

    /**
     * 保存工作
     */
    submitJob() {
        console.log(this.jobInfo);

        if (this.jobInfo.jobTitle == null) {
            ToastUtil.presentToast(this.toastCtrl, '标题不能为空');
            return;
        }

        if (this.jobInfo.jobCategoryId == null) {
            ToastUtil.presentToast(this.toastCtrl, '必须得选择一个分类');
            return;
        }

        if (this.jobInfo.recruitNum == null || this.jobInfo.recruitNum == 0) {
            ToastUtil.presentToast(this.toastCtrl, '招聘人数不能为空或者0');
            return;
        }

        if (this.jobInfo.timelinessType == null) {
            ToastUtil.presentToast(this.toastCtrl, '招聘时效不能为空');
            return;
        }

        if (this.jobInfo.startTime == null || this.jobInfo.endTime == null) {
            ToastUtil.presentToast(this.toastCtrl, '招聘起止时间不能为空');
            return;
        }

        if (this.jobInfo.payPeriodType == null) {
            ToastUtil.presentToast(this.toastCtrl, '薪资支付周期不能为空');
            return;
        }

        if (this.jobInfo.salary == null) {
            ToastUtil.presentToast(this.toastCtrl, '薪资不能为空');
            return;
        }

        if (this.jobInfo.workTime == null || this.jobInfo.workTime.trim() == ' ') {
            ToastUtil.presentToast(this.toastCtrl, '工作时间段不能为空');
            return;
        }

        if (this.jobInfo.workAddress == null || this.jobInfo.workAddress.trim() == ' ') {
            ToastUtil.presentToast(this.toastCtrl, '工作地点不能为空');
            return;
        }

        if (this.jobInfo.jobDetail == null || this.jobInfo.jobDetail.trim() == ' ') {
            ToastUtil.presentToast(this.toastCtrl, '工作详情不能为空');
            return;
        }

        this.enterpriseService.saveJob(this.jobInfo).subscribe(
            res =>{
                if (res.code == 0) {
                    ToastUtil.presentToast(this.toastCtrl, res.msg);
                    this.gotoEnterprise();
                }else {
                    ToastUtil.presentToast(this.toastCtrl, res.msg);
                }

            }
        );
    }

}
