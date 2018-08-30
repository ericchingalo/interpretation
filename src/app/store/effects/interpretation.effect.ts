import {Injectable }from '@angular/core'; 
import {Actions, Effect, ofType }from '@ngrx/effects'; 
import {Observable, of }from 'rxjs'; 
import {catchError, map, switchMap }from 'rxjs/internal/operators'; 

import {NgxDhis2HttpClientService }from '@hisptz/ngx-dhis2-http-client'; 

import {Interpretation }from '../../models/interpretation.model'; 
import {SystemInfoActionTypes }from '../actions/system-info.action'; 
import {LoadNotificationSuccess }from '../actions/notification.action'
import {
InterpretationActionTypes, 
LoadInterpreationFail, 
LoadInterpretationSuccess, 
LoadInterpretation
 }from '../actions/interpretation.action'; 


@Injectable()
export class InterpretationEffect {

constructor(
private actions$:Actions, 
private httpService:NgxDhis2HttpClientService
    ) {}

@Effect()
currentUserLoaded$:Observable < any >  = this.actions$.pipe(
ofType(SystemInfoActionTypes.LoadSystemInfoSuccess), 
switchMap((action:any) => of(action.payload.apiRootUrl).pipe(
map((rootUrl:string) => new LoadInterpretation(rootUrl)), 
catchError((error:any) => of(new LoadInterpreationFail(error)))
)))

@Effect()loadInterpretation$ = this.actions$.pipe(
ofType(InterpretationActionTypes.LoadInterpretation), 
switchMap((action:any) => this.getInterpretations(action.payload.apiRootUrl).pipe(
map((interpretations:Interpretation[]) => new LoadInterpretationSuccess(interpretations)), 
catchError((errorNotification:any) => of(new LoadNotificationSuccess(errorNotification)))
)))

getInterpretations(rootUrl) {
    return new Observable(observer =>  {
        this.httpService.get(`interpretations.json?fields=id,type,text,created,likes,likedBy[id,name],user[id,name,displayName],comments[id,created,lastUpdated,text,user[id,name,displayName]],eventReport[*],eventChart[*],chart[*],map[id,name,mapViews[*]],reportTable[*]&paging=false`)
        .subscribe((response:any) =>  {
            observer.next(response.interpretations); 
            observer.complete(); 
        }, (error) => observer.error(error)); 
      }); 
    }
}

//interpretations.json?fields=id,type,text,created,likes,likedBy[id,name],user[id,name,displayName],comments[id,created,lastUpdated,text,user[id,name,displayName]],eventReport[*],eventChart[*],chart[*],map[id,name,mapViews[*]],reportTable[*]&paging=false