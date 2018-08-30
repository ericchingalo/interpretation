import {BrowserModule }from '@angular/platform-browser'; 
import {NgModule }from '@angular/core'; 
import {FormsModule }from '@angular/forms'
import {HttpClientModule }from '@angular/common/http'; 
import { AngularFontAwesomeModule } from 'angular-font-awesome'

import {StoreModule }from '@ngrx/store'; 
import {StoreDevtoolsModule }from '@ngrx/store-devtools'; 
import {EffectsModule }from '@ngrx/effects'; 

import {environment }from '../environments/environment'; 

import {reducers, metaReducers, effects }from './store'


import {AppComponent }from './app.component'; 
import {AddCommentComponent }from './modules/interpretation/components/add-comment/add-comment.component'; 
import {AddInterpretationComponent }from './modules/interpretation/components/add-interpretation/add-interpretation.component'; 
import {DeleteCommentComponent }from './modules/interpretation/components/delete-comment/delete-comment.component'; 
import {EditCommentComponent }from './modules/interpretation/components/edit-comment/edit-comment.component'; 
import {EditInterpretationComponent }from './modules/interpretation/components/edit-interpretation/edit-interpretation.component'; 
import {InterpretationCommentComponent }from './modules/interpretation/components/interpretation-comment/interpretation-comment.component'; 
import {InterpretationLikeComponent }from './modules/interpretation/components/interpretation-like/interpretation-like.component'; 
import {InterpretationListComponent }from './modules/interpretation/components/interpretation-list/interpretation-list.component'; 
import {CommentLikeComponent }from './modules/interpretation/components/comment-like/comment-like.component'; 
import { VisualizationCardComponent } from './components/visualization-card/visualization-card.component'; 
import {HomeComponent }from './pages/home/home.component'; 

import {AutosizeDirective }from './modules/interpretation/directives/autosize.directive'

import {AbbreviatePipe }from  '../app/modules/interpretation/pipes/abbreviate.pipe'; 
import {FilterPipe }from '../app/modules/interpretation/pipes/filter.pipe'; 
import {TruncatePipe }from '../app/modules/interpretation/pipes/truncate.pipe';



@NgModule( {
declarations:[
AppComponent, 
AddCommentComponent, 
AddInterpretationComponent, 
DeleteCommentComponent, 
EditCommentComponent, 
EditInterpretationComponent, 
InterpretationCommentComponent, 
InterpretationLikeComponent, 
InterpretationListComponent, 
CommentLikeComponent, 
HomeComponent, 
AbbreviatePipe, 
FilterPipe, 
TruncatePipe, 
AutosizeDirective, VisualizationCardComponent, 
], 
imports:[

BrowserModule, 

HttpClientModule, 

AngularFontAwesomeModule,

FormsModule, 

StoreModule.forRoot(reducers,  {metaReducers }), 

EffectsModule.forRoot(effects),  ! environment.production?StoreDevtoolsModule.instrument():[]

], 
providers:[], 
bootstrap:[AppComponent]
})
export class AppModule {}