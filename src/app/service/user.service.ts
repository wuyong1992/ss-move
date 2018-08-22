import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserInfo} from '../model/user-info';
import {ServiceResponse} from '../model/service-response';
import {Observable} from 'rxjs';


const URL_PREFIX = environment.URL_PREFIX;

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    /**
     * 根据token获取用户信息
     * @param token
     */
    getUserInfo(): Observable<ServiceResponse<UserInfo>> {
        let token = localStorage.getItem('token');
        let header = new HttpHeaders().set('Authorization', token);
        return this.http.get(URL_PREFIX + '/frontend/user', {headers: header});
    }

    /**
     * 更新用户信息
     */
    saveUser(userInfo: UserInfo): Observable<ServiceResponse<UserInfo>> {
        let token = localStorage.getItem('token');
        let header = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
        return this.http.post(URL_PREFIX + '/frontend/user/save', JSON.stringify(userInfo), {headers: header});
    }

    /**
     * 申请工作
     * @param jobId，工作主键ID
     */
    applyJob(jobId: number): Observable<ServiceResponse<any>> {
        let token = localStorage.getItem('token');
        let header = new HttpHeaders().set('Authorization', token);
        return this.http.post(URL_PREFIX + '/frontend/user/apply-job/' + jobId, {}, {headers: header});
    }

    /**
     * 校验token的有效性
     * @param token
     */
    checkTokenAvailability(token: string): Observable<ServiceResponse<any>> {
        let header = new HttpHeaders().set('Authorization', token);
        return this.http.put(URL_PREFIX + '/frontend/user/check-token', {}, {headers: header});
    }

}
