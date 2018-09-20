import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInterpretationsComponent } from './top-interpretations.component';

describe('TopInterpretationsComponent', () => {
  let component: TopInterpretationsComponent;
  let fixture: ComponentFixture<TopInterpretationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopInterpretationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopInterpretationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
