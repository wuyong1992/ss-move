import {Component, OnInit} from '@angular/core';
import {AlertController, ToastController} from '@ionic/angular';
import {EnterpriseInfo} from '../../model/enterprise-info';
import {ToastUtil} from '../../util/toast-util';
import {ValidatePhone} from '../../util/my-validate';
import {EnterpriseService} from '../../service/enterprise.service';
import {UserService} from '../../service/user.service';

@Component({
    selector: 'app-enterprise-center',
    templateUrl: './enterprise-center.page.html',
    styleUrls: ['./enterprise-center.page.scss'],
})
export class EnterpriseCenterPage implements OnInit {

    enterpriseInfo = new EnterpriseInfo();


    constructor(private alertCtrl: AlertController,
                private toastCtrl: ToastController,
                private enterpriseSevice: EnterpriseService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.initEnterpriseInfo();
    }


    /* 企业负责人姓名 */
    async inputManageName() {
        const usernameAlert = await this.alertCtrl.create({
            header: '企业联系人姓名',
            inputs: [
                {
                    name: 'manageName',
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
                        console.log('OK', data);
                        let manageName = data.manageName;
                        if (!manageName || !manageName.trim()) {
                            return false;
                        }
                        this.enterpriseInfo.manageName = manageName;
                        //
                    }
                }
            ]
        });
        usernameAlert.present();
    }

    /* 企业手机号 */
    async inputPhone() {
        const phoneAlert = await this.alertCtrl.create({
            header: '输入企业联系人的手机号',
            inputs: [
                {
                    name: 'phone',
                    type: 'number',
                    placeholder: '必填',
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
                        this.enterpriseInfo.enterprisePhone = phone;
                    }
                }
            ]
        });
        phoneAlert.present();
    }

    /* 企业全称 */
    async inputEnterpriseFullName() {
        const enterpriseFullNameAlert = await this.alertCtrl.create({
            header: '输入企业全称',
            inputs: [
                {
                    name: 'enterpriseFullName',
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
                        let enterpriseFullName = data.enterpriseFullName;
                        if (!enterpriseFullName || !enterpriseFullName.trim()) {
                            return false;
                        }
                        this.enterpriseInfo.fullName = enterpriseFullName;
                    }
                }
            ]
        });
        enterpriseFullNameAlert.present();
    }

    /* 企业简介 */
    async inputEnterpriseIntro() {
        const enterpriseIntroAlert = await this.alertCtrl.create({
            header: '输入企业简介',
            inputs: [
                {
                    name: 'enterpriseIntro',
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
                        let enterpriseIntro = data.enterpriseIntro;
                        if (!enterpriseIntro || !enterpriseIntro.trim()) {
                            return false;
                        }
                        this.enterpriseInfo.intro = enterpriseIntro;
                    }
                }
            ]
        });
        enterpriseIntroAlert.present();
    }

    /* 企业地址 */
    async inputEnterpriseAddress() {
        const enterpriseAddressAlert = await this.alertCtrl.create({
            header: '输入企业地址',
            inputs: [
                {
                    name: 'enterpriseAddress',
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
                        let enterpriseAddress = data.enterpriseAddress;
                        if (!enterpriseAddress || !enterpriseAddress.trim()) {
                            return false;
                        }
                        this.enterpriseInfo.enterpriseAddress = enterpriseAddress;
                    }
                }
            ]
        });
        enterpriseAddressAlert.present();
    }

    /* 企业QQ */
    async inputEnterpriseQQ() {
        const qqAlert = await this.alertCtrl.create({
            header: '输入企业的QQ号',
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
                        this.enterpriseInfo.enterpriseQq = qq;
                    }
                }
            ]
        });
        qqAlert.present();
    }


    saveEnterprise(event) {
        event.stopPropagation();
        this.presentSaveEnterpriseAlertConfirm();
    }


    async presentSaveEnterpriseAlertConfirm() {
        const alert = await this.alertCtrl.create({
            header: '提醒!',
            message: '更新信息需要后台重新审核，您确定要更新吗？',
            buttons: [
                {
                    text: '算了',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: '确定',
                    handler: () => {
                        console.log('Confirm Okay');
                        // 保存或更新企业信息
                        console.log(this.enterpriseInfo);
                        this.confirmSaveEnterpriseInfo();
                    }
                }
            ]
        });

        await alert.present();
    }

    /**
     * 确认保存
     */
    private confirmSaveEnterpriseInfo() {

        if (this.enterpriseInfo.manageName == null) {
            ToastUtil.presentToast(this.toastCtrl, '联系人不填我们怎么联系你呢');
            return;
        }

        if (this.enterpriseInfo.enterprisePhone == null || this.enterpriseInfo.enterprisePhone == undefined) {
            ToastUtil.presentToast(this.toastCtrl, '手机号不填我们怎么联系你呢？');
            return;
        }
        if (!ValidatePhone(this.enterpriseInfo.enterprisePhone)) {
            ToastUtil.presentToast(this.toastCtrl, '手机号不符合规则，别乱填');
            return;
        }

        if (this.enterpriseInfo.fullName == null) {
            ToastUtil.presentToast(this.toastCtrl, '企业全称不能为空');
            return;
        }

        if (this.enterpriseInfo.enterpriseAddress == null) {
            ToastUtil.presentToast(this.toastCtrl, '企业地址不能为空');
            return;
        }

        this.enterpriseSevice.saveEnterpriseInfo(this.enterpriseInfo).subscribe(
            res =>{
                if (res.code == 0) {
                    this.enterpriseInfo = res.data;
                    ToastUtil.presentToast(this.toastCtrl, res.msg);
                }else {
                    ToastUtil.presentToast(this.toastCtrl, res.msg);
                }
            }
        );

    }

    /**
     * 初始化企业信息
     */
    private initEnterpriseInfo() {
        this.enterpriseSevice.getEnterpriseInfo().subscribe(
            res => {
                if (res.code == 0) {
                    this.enterpriseInfo = res.data;
                }
            }
        );
    }
}
