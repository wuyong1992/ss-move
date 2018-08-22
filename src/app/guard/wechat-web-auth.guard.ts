import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../service/user.service';
import {ToastController} from '@ionic/angular';
import {ToastUtil} from '../util/toast-util';
import {environment} from '../../environments/environment';

/**
 * 微信网页授权
 */
@Injectable({
    providedIn: 'root'
})
export class WechatWebAuthGuard implements CanActivate {

    constructor(private userService: UserService,
                private toastCtrl: ToastController) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        // localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiLlkLTli4ciLCJ1bmlvbmlkIjpudWxsLCJ1c2VyX2lkIjoxLCJwaG9uZSI6bnVsbCwib3BlbmlkIjoxLCJlbnRlcnByaXNlSWQiOm51bGwsImlhdCI6MTUzNDgyMDc3NSwianRpIjoiMTUzNDgyMDc3NTQyNy0xIn0.vPy2zTfzwggEXsz35vp7KW2zLMjhGy2YOx17gfL-f-4');

        return new Observable((observable) => {
            let token = next.queryParams['token'];
            if (token == null || token == '') {
                // 浏览器地址中没有携带token信息
                token = localStorage.getItem('token');
                if (token == null || token == '') {
                    // 重定向发起授权申请
                    location.href = environment.WE_CHAT_WEB_AUTH_URL;
                    observable.next(false);
                    observable.complete();
                }
            }
            this.userService.checkTokenAvailability(token).subscribe(
                res => {
                    if (res.code == 0) {
                        localStorage.setItem('token', token);
                        observable.next(true);
                    } else {
                        observable.next(false);
                    }
                    observable.complete();
                },
                error => {
                    // 提示错误
                    ToastUtil.presentToast(this.toastCtrl, '网络异常，请联系客服');
                    observable.next(false);
                    observable.complete();
                }
            );
        });
    }


}
