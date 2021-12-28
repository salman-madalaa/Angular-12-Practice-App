import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial16Component } from './tutorial16.component';

describe('Tutorial16Component', () => {
  let component: Tutorial16Component;
  let fixture: ComponentFixture<Tutorial16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
