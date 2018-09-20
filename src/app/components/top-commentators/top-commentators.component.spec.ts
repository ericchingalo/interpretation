import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCommentatorsComponent } from './top-commentators.component';

describe('TopCommentatorsComponent', () => {
  let component: TopCommentatorsComponent;
  let fixture: ComponentFixture<TopCommentatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCommentatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCommentatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
