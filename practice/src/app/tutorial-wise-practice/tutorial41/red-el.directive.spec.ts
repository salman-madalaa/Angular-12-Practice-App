import { TestBed } from '@angular/core/testing';
import { RedElDirective } from './red-el.directive';

describe('RedElDirective', () => {
  it('should create an instance', () => {
    // const directive = new RedElDirective(Renderer2,elRefMock);
    // expect(directive).toBeTruthy();
    const fixture = TestBed.createComponent(RedElDirective);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
