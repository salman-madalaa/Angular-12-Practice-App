import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial42Component } from './tutorial42.component';

describe('Tutorial42Component', () => {
  let component: Tutorial42Component;
  let fixture: ComponentFixture<Tutorial42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial42Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
