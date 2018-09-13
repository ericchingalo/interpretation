import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { State } from '../../../../store/reducers'
import { User } from '../../../../models/users.model';
import { getAllUsers } from '../../../../store/selectors/users.selector';

import {InterpretationService} from '../../services/interpretation.service';
import * as moment from 'moment';

@Component({
  selector: 'app-interpretation-comment',
  templateUrl: './interpretation-comment.component.html',
  styleUrls: ['./interpretation-comment.component.css']
})
export class InterpretationCommentComponent implements OnInit {
  @Input() showCommentInput: boolean;
  @Input() comment: any;
  @Input() interpretation: any;
  @Input() currentUser: any;
  @Input() rootUrl: string;
  @Output() onCommentDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCommentCreated: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCommentUpdated: EventEmitter<any> = new EventEmitter<any>();

  users$: Observable<User[]>;
  constructor(private interpretationService: InterpretationService,  private store : Store<State>) {
    this.users$ = this.store.select(getAllUsers);
    this.showCommentInput = false;
  }

  ngOnInit() {
    if (this.comment) {
      this.comment = {
        ...this.comment,
        showDate: true,
        showMoreButton: false,
        showDeleteButton: this.comment.user.id === this.currentUser.id,
        lastUpdated: moment(this.comment.lastUpdated, 'YYYY-MM-DD HH:mm Z').fromNow()
      };
    }
  }

  toggleCommentOptions(e, mouseEnter:boolean = false) {
    e.stopPropagation();
    if (mouseEnter) {
      this.comment.showDate = false;
      this.comment.showMoreButton = true;
    } else {
      this.comment.showDate = true;
      this.comment.showMoreButton = false;
      this.comment.showDropdownOption = false;
    }
  }

  toggleCommentDropdown(e) {
    e.stopPropagation();
    this.comment.showDropdownOptions = !this.comment.showDropdownOptions;
  }

  toggleDeleteConfirmationDialog(e?) {
    if (e) {
      e.stopPropagation();
    }
    this.comment = {...this.comment, showDeleteDialog: !this.comment.showDeleteDialog, showDropdownOptions: false};
  }

  commentCreated(interpretation: any) {
    this.onCommentCreated.emit(interpretation)
  }

  commentDeleted(comment: any) {
    this.onCommentDelete.emit(comment)
  }

  commentUpdated(interpretation) {
    this.onCommentUpdated.emit(interpretation);
  }

  toggleCommentEditForm(e?) {
    if (e) {
      e.stopPropagation();
    }
    this.comment = {
      ...this.comment,
      showEditForm: !this.comment.showEditForm,
      showDropdownOptions: !this.comment.showDropdownOptions
    };
  }

}
