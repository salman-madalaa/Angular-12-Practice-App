import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial26Component } from './tutorial26.component';

describe('Tutorial26Component', () => {
  let component: Tutorial26Component;
  let fixture: ComponentFixture<Tutorial26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
