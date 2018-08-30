import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'; 
import { Observable } from 'rxjs';
import { Interpretation } from '../../models/interpretation.model';
import { CurrentUser } from '../../models/current-user.model';

import { getAllInterpretations, getCurrentUserDetails, getApiRootUrl } from '../../store';
import { State } from '../../store/reducers';
import { LoadSystemInfo } from '../../store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  interpretations$ : Observable<Interpretation>;
  currentUser$ : Observable<CurrentUser>;
  apiRootUrl$: Observable<string>;

  constructor(private store: Store<State>) {
    this.interpretations$ = this.store.select(getAllInterpretations);
    this.currentUser$ = this.store.select(getCurrentUserDetails);
    this.apiRootUrl$ = this.store.select(getApiRootUrl);
   }

  ngOnInit() {
    this.store.dispatch(new LoadSystemInfo());
  }

}
