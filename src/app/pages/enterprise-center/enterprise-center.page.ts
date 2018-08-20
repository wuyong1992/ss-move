import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-enterprise-center',
    templateUrl: './enterprise-center.page.html',
    styleUrls: ['./enterprise-center.page.scss'],
})
export class EnterpriseCenterPage implements OnInit {

    constructor(private alertCtrl:AlertController) {
    }

    ngOnInit() {
    }


    /* 企业负责人姓名 */
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
                    handler: () => {
                    }
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


    /* 企业手机号 */
    async inputPhone() {

    }

    /* 企业全称 */
    inputEnterpriseFullName() {

    }

    /* 企业QQ */
    inputEnterpriseQQ() {

    }
}
