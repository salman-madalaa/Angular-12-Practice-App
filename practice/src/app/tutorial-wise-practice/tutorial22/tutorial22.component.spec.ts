import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial22Component } from './tutorial22.component';

describe('Tutorial22Component', () => {
  let component: Tutorial22Component;
  let fixture: ComponentFixture<Tutorial22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
