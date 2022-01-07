import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial55Component } from './tutorial55.component';

describe('Tutorial55Component', () => {
  let component: Tutorial55Component;
  let fixture: ComponentFixture<Tutorial55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial55Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
