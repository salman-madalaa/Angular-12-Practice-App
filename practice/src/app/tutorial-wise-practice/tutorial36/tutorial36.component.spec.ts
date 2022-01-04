import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial36Component } from './tutorial36.component';

describe('Tutorial36Component', () => {
  let component: Tutorial36Component;
  let fixture: ComponentFixture<Tutorial36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial36Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
