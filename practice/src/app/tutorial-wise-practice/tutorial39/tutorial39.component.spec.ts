import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial39Component } from './tutorial39.component';

describe('Tutorial39Component', () => {
  let component: Tutorial39Component;
  let fixture: ComponentFixture<Tutorial39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial39Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
