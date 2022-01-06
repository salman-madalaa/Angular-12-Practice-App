import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial46Component } from './tutorial46.component';

describe('Tutorial46Component', () => {
  let component: Tutorial46Component;
  let fixture: ComponentFixture<Tutorial46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial46Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
