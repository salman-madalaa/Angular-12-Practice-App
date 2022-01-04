import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial37Component } from './tutorial37.component';

describe('Tutorial37Component', () => {
  let component: Tutorial37Component;
  let fixture: ComponentFixture<Tutorial37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial37Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
