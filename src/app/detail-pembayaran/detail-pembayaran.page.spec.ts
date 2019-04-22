import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPembayaranPage } from './detail-pembayaran.page';

describe('DetailPembayaranPage', () => {
  let component: DetailPembayaranPage;
  let fixture: ComponentFixture<DetailPembayaranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPembayaranPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPembayaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
