import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitCreatePage } from './recruit-create.page';

describe('RecruitCreatePage', () => {
  let component: RecruitCreatePage;
  let fixture: ComponentFixture<RecruitCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
