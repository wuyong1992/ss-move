import {ToastController} from '@ionic/angular';

export class ToastUtil {

    static async presentToast(toastCtrl: ToastController, msg: string) {
        const toast = await toastCtrl.create({
            message: msg,
            duration: 3000,
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: '关闭'
        });
        toast.present();
    }
}
