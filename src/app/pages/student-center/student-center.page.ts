import {Component, OnInit} from '@angular/core';
import {AlertController, PickerController, ToastController} from '@ionic/angular';
import {ToastUtil} from '../../util/toast-util';
import {UserService} from '../../service/user.service';
import {UserInfo} from '../../model/user-info';
import {ValidatePhone, ValidateQQ} from '../../util/my-validate';

@Component({
    selector: 'app-student-center',
    templateUrl: './student-center.page.html',
    styleUrls: ['./student-center.page.scss'],
})
export class StudentCenterPage implements OnInit {

    userInfo = new UserInfo();


    constructor(private alertCtrl: AlertController,
                private pickerCtrl: PickerController,
                private toastCtrl: ToastController,
                private userService: UserService) {
    }

    ngOnInit() {
        this.initUserInfo();
    }


    /* 姓名 */
    async inputRealName() {
        const realNameAlert = await this.alertCtrl.create({
            header: '输入真实姓名',
            inputs: [
                {
                    name: 'realName',
                    type: 'text',
                    placeholder: '必填'
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                },
                {
                    text: '确定',
                    handler: (data) => {
                        let realName = data.realName;
                        if (!realName || !realName.trim()) {
                            return false;
                        }
                        this.userInfo.realName = realName;
                    }
                }
            ]
        });
        realNameAlert.present();
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
                        this.userInfo.age = data.agePicker.value;
                    }
                }
            ],
            columns: [
                {
                    name: 'agePicker',
                    options: [
                        {
                            text: '17',
                            value: 17,
                            disabled: true
                        }, {
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
    async pickerSex() {
        const sexPicker = await this.pickerCtrl.create({
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
                        this.userInfo.sex = data.sexPicker.value;
                    }
                }
            ],
            columns: [
                {
                    name: 'sexPicker',
                    options: [
                        {
                            text: '保密',
                            value: 0,
                            disabled: true
                        },
                        {
                            text: '男',
                            value: 1,
                        },
                        {
                            text: '女',
                            value: 2,
                        }
                    ],
                    selectedIndex: 1
                },
            ],
            cssClass: 'secondary'
        });
        sexPicker.present();
    }

    /* 学校名称 */
    async inputSchoolName() {
        const schoolNameAlert = await this.alertCtrl.create({
            header: '输入您的学校全称',
            inputs: [
                {
                    name: 'schoolName',
                    type: 'text',
                    placeholder: '必填'
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                },
                {
                    text: '确定',
                    handler: (data) => {
                        let schoolName = data.schoolName;
                        if (!schoolName || !schoolName.trim()) {
                            return false;
                        }
                        this.userInfo.schoolName = schoolName;
                    }
                }
            ]
        });
        schoolNameAlert.present();
    }

    /* 专业 */
    async inputMajor() {
        const majorAlert = await this.alertCtrl.create({
            header: '输入您的专业全称',
            inputs: [
                {
                    name: 'major',
                    type: 'text',
                    placeholder: '必填'
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                },
                {
                    text: '确定',
                    handler: (data) => {
                        let major = data.major;
                        if (!major || !major.trim()) {
                            return false;
                        }
                        this.userInfo.major = major;
                    }
                }
            ]
        });
        majorAlert.present();
    }

    /* qq */
    async inputQQ() {
        const qqAlert = await this.alertCtrl.create({
            header: '输入您的QQ号',
            inputs: [
                {
                    name: 'qq',
                    type: 'number',
                    placeholder: '选填'
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                },
                {
                    text: '确定',
                    handler: (data) => {
                        let qq = data.qq;
                        if (!qq || !qq.trim()) {
                            return false;
                        }
                        this.userInfo.qq = qq;
                    }
                }
            ]
        });
        qqAlert.present();
    }

    /* 手机号 */
    async inputPhone() {
        const phoneAlert = await this.alertCtrl.create({
            header: '输入您的手机号',
            inputs: [
                {
                    name: 'phone',
                    type: 'number',
                    placeholder: '手机号',
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                },
                {
                    text: '确定',
                    handler: (data) => {
                        let phone = data.phone;
                        if (!phone || !phone.trim()) {
                            return false;
                        }
                        this.userInfo.phone = phone;
                    }
                }
            ]
        });
        phoneAlert.present();
    }

    /* 特长 */
    async inputSpeciality() {
        const specialityAlert = await this.alertCtrl.create({
            header: '输入您的特长',
            inputs: [
                {
                    name: 'speciality',
                    type: 'text',
                    placeholder: '选填'
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                },
                {
                    text: '确定',
                    handler: (data) => {
                        let speciality = data.speciality;
                        if (!speciality || !speciality.trim()) {
                            return false;
                        }
                        this.userInfo.speciality = speciality;
                    }
                }
            ]
        });
        specialityAlert.present();
    }


    /**
     * 初始化用户信息
     */
    private initUserInfo() {
        this.userService.getUserInfo().subscribe(
            res => {
                if (res.code == 0) {
                    this.userInfo = res.data;
                } else {
                    ToastUtil.presentToast(this.toastCtrl, res.msg);
                }
            }
        );
    }

    saveUserInfo() {
        console.log('save:', this.userInfo);
        // 参数校验

        if (this.userInfo.realName == null || this.userInfo.realName == undefined) {
            ToastUtil.presentToast(this.toastCtrl, '真实姓名不能为空');
            return;
        }

        if (this.userInfo.age == null || this.userInfo.age == undefined) {
            ToastUtil.presentToast(this.toastCtrl, '年龄不能为空');
            return;
        }

        if (this.userInfo.sex == null || this.userInfo.sex == undefined) {
            ToastUtil.presentToast(this.toastCtrl, '不能没有性别吧');
            return;
        }

        if (this.userInfo.schoolName == null || this.userInfo.schoolName == undefined) {
            ToastUtil.presentToast(this.toastCtrl, '学校名称还是需要的');
            return;
        }

        if (this.userInfo.major == null || this.userInfo.major == undefined) {
            ToastUtil.presentToast(this.toastCtrl, '专业不能为空');
            return;
        }

        /*if (this.userInfo.qq == null || this.userInfo.qq == undefined) {
            ToastUtil.presentToast(this.toastCtrl, 'QQ不能为空，我们需要能联系你');
            return;
        }*/

        if (this.userInfo.phone == null || this.userInfo.phone == undefined) {
            ToastUtil.presentToast(this.toastCtrl, '手机号不填我们怎么联系你呢？');
            return;
        }
        if (!ValidatePhone(this.userInfo.phone)) {
            ToastUtil.presentToast(this.toastCtrl, '手机号不符合规则，别乱填');
            return;
        }

        /*if (this.userInfo.speciality == null || this.userInfo.speciality == undefined) {
            ToastUtil.presentToast(this.toastCtrl, '难道你真的没有特长吗？');
            return;
        }*/

        // 校验通过
        this.userService.saveUser(this.userInfo).subscribe(
            res => {
                if (res.code == 0) {
                    this.userInfo = res.data;
                    ToastUtil.presentToast(this.toastCtrl, res.msg);
                } else {
                    ToastUtil.presentToast(this.toastCtrl, res.msg);
                }
            }
        );
    }
}
