import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavParams} from '@ionic/angular';

@Component({
    selector: 'app-apply-job-result',
    templateUrl: './apply-job-result.component.html',
    styleUrls: ['./apply-job-result.component.scss']
})
export class ApplyJobResultComponent implements OnInit {

    userInfoFull: boolean = false;
    popover: any;

    constructor(private router: Router,
                private navParams:NavParams) {
        this.popover = this.navParams.data.popover;
    }

    ngOnInit() {
        console.log(this.navParams.data);
        console.log(this.userInfoFull);
        console.log(this.popover);

    }

    closeModal() {
        console.log('close');
        this.popover.dismiss()

    }

    gotoStudentCenter() {
        this.popover.dismiss();
        this.router.navigateByUrl('/student-center');
    }

}
