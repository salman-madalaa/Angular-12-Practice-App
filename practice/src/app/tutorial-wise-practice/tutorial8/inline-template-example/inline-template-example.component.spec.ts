import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTemplateExampleComponent } from './inline-template-example.component';

describe('InlineTemplateExampleComponent', () => {
  let component: InlineTemplateExampleComponent;
  let fixture: ComponentFixture<InlineTemplateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineTemplateExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineTemplateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
