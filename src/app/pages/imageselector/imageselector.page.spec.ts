import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageselectorPage } from './imageselector.page';

describe('ImageselectorPage', () => {
  let component: ImageselectorPage;
  let fixture: ComponentFixture<ImageselectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageselectorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageselectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
