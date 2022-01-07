import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial51Component } from './tutorial51.component';

describe('Tutorial51Component', () => {
  let component: Tutorial51Component;
  let fixture: ComponentFixture<Tutorial51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial51Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
