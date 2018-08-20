import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyJobResultComponent } from './apply-job-result.component';

describe('ApplyJobResultComponent', () => {
  let component: ApplyJobResultComponent;
  let fixture: ComponentFixture<ApplyJobResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyJobResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyJobResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
