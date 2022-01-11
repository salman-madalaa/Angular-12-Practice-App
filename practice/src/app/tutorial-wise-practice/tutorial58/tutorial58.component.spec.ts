import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial58Component } from './tutorial58.component';

describe('Tutorial58Component', () => {
  let component: Tutorial58Component;
  let fixture: ComponentFixture<Tutorial58Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial58Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing title', () => {
    expect(component.name).toBe("tutorial58");
  });


  it('sum function testing', () => {
    expect(component.sum(40,60)).toBe(100);
  });

  it('element testing', () => {
    const nativeeEle = fixture.nativeElement;
    expect(nativeeEle.querySelector(".heading").textContent).toBe("Component Unit Testing");
  });
});
