import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'; 

import { State } from '../../store/reducers';
import { LoadSystemInfo } from '../../store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<State>) {
    
   }

  ngOnInit() {
    this.store.dispatch(new LoadSystemInfo());
  }

}
