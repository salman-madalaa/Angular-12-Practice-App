import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial11Component } from './tutorial11.component';

describe('Tutorial11Component', () => {
  let component: Tutorial11Component;
  let fixture: ComponentFixture<Tutorial11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
