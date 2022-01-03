import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial31Component } from './tutorial31.component';

describe('Tutorial31Component', () => {
  let component: Tutorial31Component;
  let fixture: ComponentFixture<Tutorial31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
