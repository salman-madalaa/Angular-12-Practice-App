import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(renderer: Renderer2, el: ElementRef) {
    el.nativeElement.style.color="red";
    renderer.setStyle(el.nativeElement, 'background-color', 'yellow');
  }

}
