import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseCenterPage } from './enterprise-center.page';

describe('EnterpriseCenterPage', () => {
  let component: EnterpriseCenterPage;
  let fixture: ComponentFixture<EnterpriseCenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseCenterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
