import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial15Component } from './tutorial15.component';

describe('Tutorial15Component', () => {
  let component: Tutorial15Component;
  let fixture: ComponentFixture<Tutorial15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
