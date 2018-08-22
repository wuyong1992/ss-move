import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ServiceResponse} from '../model/service-response';
import {EnterpriseInfo} from '../model/enterprise-info';
import {JobInfo} from '../model/job-info';

const URL_PREFIX = environment.URL_PREFIX;

@Injectable({
    providedIn: 'root'
})
export class EnterpriseService {

    constructor(private http: HttpClient) {
    }

    /**
     * 获取企业信息
     */
    getEnterpriseInfo(): Observable<ServiceResponse<EnterpriseInfo>> {
        let header = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
        return this.http.get(URL_PREFIX + '/frontend/enterprise', {headers: header});
    }

    /**
     * 更新企业信息
     * @param enterpriseInfo
     */
    saveEnterpriseInfo(enterpriseInfo: EnterpriseInfo): Observable<ServiceResponse<EnterpriseInfo>> {
        let header = new HttpHeaders().set('Authorization', localStorage.getItem('token')).set('Content-Type', 'application/json');
        return this.http.post(URL_PREFIX + '/frontend/enterprise', JSON.stringify(enterpriseInfo), {headers: header});
    }

    /**
     * 新增或更新一个招聘信息
     * @param jonInfo
     */
    saveJob(jonInfo: JobInfo): Observable<ServiceResponse<any>> {
        let header = new HttpHeaders().set('Authorization', localStorage.getItem('token')).set('Content-Type', 'application/json');
        return this.http.post(URL_PREFIX + '/frontend/enterprise/save-job', JSON.stringify(jonInfo), {headers: header});
    }

    /**
     * 获取自己已发布的招聘信息
     */
    getSelfPutOutJobList(): Observable<ServiceResponse<any>> {
        let header = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
        return this.http.get(URL_PREFIX + '/frontend/enterprise/job-list', {headers: header});
    }

}
