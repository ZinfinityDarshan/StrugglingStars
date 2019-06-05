import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPostPage } from './show-post.page';

describe('ShowPostPage', () => {
  let component: ShowPostPage;
  let fixture: ComponentFixture<ShowPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
