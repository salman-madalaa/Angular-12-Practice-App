import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStyleExampleComponent } from './inline-style-example.component';

describe('InlineStyleExampleComponent', () => {
  let component: InlineStyleExampleComponent;
  let fixture: ComponentFixture<InlineStyleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineStyleExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineStyleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
