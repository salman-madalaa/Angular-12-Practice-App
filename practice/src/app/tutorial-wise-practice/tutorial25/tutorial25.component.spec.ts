import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial25Component } from './tutorial25.component';

describe('Tutorial25Component', () => {
  let component: Tutorial25Component;
  let fixture: ComponentFixture<Tutorial25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
