import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial12Component } from './tutorial12.component';

describe('Tutorial12Component', () => {
  let component: Tutorial12Component;
  let fixture: ComponentFixture<Tutorial12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
