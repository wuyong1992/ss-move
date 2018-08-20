import { Component, OnInit } from '@angular/core';
import {AlertController, PickerController} from '@ionic/angular';

@Component({
  selector: 'app-student-center',
  templateUrl: './student-center.page.html',
  styleUrls: ['./student-center.page.scss'],
})
export class StudentCenterPage implements OnInit {

    constructor(private alertCtrl: AlertController,
                private pickerCtrl: PickerController) {
    }

    ngOnInit() {
    }


    /* 姓名 */
    async inputUsername() {
        const usernameAlert = await this.alertCtrl.create({
            header: '输入用户名',
            inputs: [
                {
                    name: 'username',
                    type: 'text',
                    placeholder: 'username'
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {}
                },
                {
                    text: '确定',
                    handler: (data) => {
                        console.log('OK', data);
                        if (!data.username) {
                            return false;
                        }
                        /* TODO 更新用户昵称 */
                    }
                }
            ]
        });
        usernameAlert.present();
    }

    /* 年龄 */
    async pickerAge() {
        const agePicker = await this.pickerCtrl.create({
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
                    }
                }
            ],
            columns: [
                {
                    name: 'agePicker',
                    options: [
                        {
                            text: '18',
                            value: 18,
                        },
                        {
                            text: '19',
                            value: 19,
                        },
                        {
                            text: '20',
                            value: 20,
                        },
                        {
                            text: '21',
                            value: 21,
                        },
                        {
                            text: '22',
                            value: 22,
                        },
                        {
                            text: '23',
                            value: 23,
                        },
                        {
                            text: '24',
                            value: 24,
                        },
                        {
                            text: '25',
                            value: 25,
                        },
                        {
                            text: '26',
                            value: 26,
                        },
                        {
                            text: '27',
                            value: 27,
                        },
                        {
                            text: '28',
                            value: 28,
                        },
                        {
                            text: '28',
                            value: 28,
                        },
                        {
                            text: '29',
                            value: 29,
                        },
                        {
                            text: '30',
                            value: 30,
                        }
                    ],
                    selectedIndex: 2
                },
            ],
            cssClass: 'secondary'
        });
        agePicker.present();

    }

    /* 性别 */
    async selectSex() {

    }

    /* 学校名称 */
    async inputSchoolName() {

    }

    /* 专业 */
    async inputMajor() {

    }

    /* qq */
    async inputQQ() {

    }

    /* 手机号 */
    async inputPhone() {

    }

    /* 特长 */
    async inputSpeciality() {

    }


}
