import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial47Component } from './tutorial47.component';

describe('Tutorial47Component', () => {
  let component: Tutorial47Component;
  let fixture: ComponentFixture<Tutorial47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial47Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
