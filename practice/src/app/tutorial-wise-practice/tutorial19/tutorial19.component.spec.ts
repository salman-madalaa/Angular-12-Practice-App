import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial19Component } from './tutorial19.component';

describe('Tutorial19Component', () => {
  let component: Tutorial19Component;
  let fixture: ComponentFixture<Tutorial19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
