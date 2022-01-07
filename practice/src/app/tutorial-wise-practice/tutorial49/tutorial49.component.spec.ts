import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial49Component } from './tutorial49.component';

describe('Tutorial49Component', () => {
  let component: Tutorial49Component;
  let fixture: ComponentFixture<Tutorial49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial49Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
