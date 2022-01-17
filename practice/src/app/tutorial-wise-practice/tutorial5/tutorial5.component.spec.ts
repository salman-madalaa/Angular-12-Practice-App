import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial5Component } from './tutorial5.component';

describe('Tutorial5Component', () => {
  let component: Tutorial5Component;
  let fixture: ComponentFixture<Tutorial5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
