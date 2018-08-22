import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ServiceResponse} from '../model/service-response';
import {JobVO} from '../model/job-vo';
import {JobCategory} from '../model/job-category';

const URL_PREFIX = environment.URL_PREFIX;

@Injectable({
    providedIn: 'root'
})
export class JobService {

    constructor(private http: HttpClient) {
    }

    /**
     * 根据条件查询工作信息
     * @param reqParam
     */
    findJobList(reqParam: {}): Observable<ServiceResponse<any>> {
        let param = new HttpParams({fromObject: reqParam});
        let header = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
        return this.http.get(URL_PREFIX + '/frontend/job/list', {headers: header, params: param});
    }

    /**
     * 获取单个工作详情
     * @param jobId
     */
    getJobVO(jobId: number): Observable<ServiceResponse<JobVO>> {
        let header = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
        return this.http.get(URL_PREFIX + '/frontend/job/' + jobId, {headers: header});
    }


    getJobCategoryList(): Observable<ServiceResponse<JobCategory[]>> {
        return this.http.get(URL_PREFIX + '/frontend/user/list');
    }


}
