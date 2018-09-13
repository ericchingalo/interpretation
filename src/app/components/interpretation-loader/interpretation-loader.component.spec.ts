import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretationLoaderComponent } from './interpretation-loader.component';

describe('InterpretationLoaderComponent', () => {
  let component: InterpretationLoaderComponent;
  let fixture: ComponentFixture<InterpretationLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpretationLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpretationLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
