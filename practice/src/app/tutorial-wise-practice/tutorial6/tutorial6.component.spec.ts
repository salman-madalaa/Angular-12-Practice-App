import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial6Component } from './tutorial6.component';

describe('Tutorial6Component', () => {
  let component: Tutorial6Component;
  let fixture: ComponentFixture<Tutorial6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
