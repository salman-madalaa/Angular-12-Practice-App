import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial59Component } from './tutorial59.component';

describe('Tutorial59Component', () => {
  let component: Tutorial59Component;
  let fixture: ComponentFixture<Tutorial59Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial59Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
