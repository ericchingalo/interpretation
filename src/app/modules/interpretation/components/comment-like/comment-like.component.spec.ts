import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentLikeComponent } from './comment-like.component';

describe('CommentLikeComponent', () => {
  let component: CommentLikeComponent;
  let fixture: ComponentFixture<CommentLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
