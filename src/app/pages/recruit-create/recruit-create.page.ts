import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Recruit} from '../../model/recruit';
import {PickerController} from '@ionic/angular';

@Component({
    selector: 'app-recruit-create',
    templateUrl: './recruit-create.page.html',
    styleUrls: ['./recruit-create.page.scss'],
})
export class RecruitCreatePage implements OnInit {

    recruit = new Recruit();
    payPeriodStr: string = '日结';

    startValue: Date = null;
    endValue: Date = null;
    endDateDisable: boolean = true;


    constructor(private router: Router,
                private pickerCtrl: PickerController) {
    }

    ngOnInit() {
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
        console.log(this.startValue);
        if (this.startValue != null) {
            this.endDateDisable = false;
        }
    }

    onEndChange(date: Date): void {
        this.endValue = date;
    }


    async pickerPayPeriod(event) {
        console.log('picker');
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
                        this.recruit.payPeriod = data.payPeriodPicker.value;
                    }
                }
            ],
            columns: [
                {
                    name: 'payPeriodPicker',
                    options: [
                        {
                            text:'日结',
                            value:1,
                        },
                        {
                            text:'周结',
                            value:2,
                        },
                        {
                            text:'月结',
                            value:3,
                        },
                    ],
                    selectedIndex: 0
                },
            ],
            cssClass: 'secondary'
        });
        payPeriodPicker.present();

    }

    submitJob() {
        console.log(this.recruit);
        if (!this.recruit.title) {

        }
    }
}
