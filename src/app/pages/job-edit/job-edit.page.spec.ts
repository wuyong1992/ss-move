import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobEditPage } from './job-edit.page';

describe('JobEditPage', () => {
  let component: JobEditPage;
  let fixture: ComponentFixture<JobEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
