import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCenterPage } from './student-center.page';

describe('StudentCenterPage', () => {
  let component: StudentCenterPage;
  let fixture: ComponentFixture<StudentCenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCenterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
