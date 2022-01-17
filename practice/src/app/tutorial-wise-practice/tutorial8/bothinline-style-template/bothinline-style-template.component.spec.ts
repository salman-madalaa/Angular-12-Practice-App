import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothinlineStyleTemplateComponent } from './bothinline-style-template.component';

describe('BothinlineStyleTemplateComponent', () => {
  let component: BothinlineStyleTemplateComponent;
  let fixture: ComponentFixture<BothinlineStyleTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BothinlineStyleTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BothinlineStyleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
