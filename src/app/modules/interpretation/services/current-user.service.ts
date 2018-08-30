import {Injectable }from '@angular/core'; 

import {NgxDhis2HttpClientService }from '@hisptz/ngx-dhis2-http-client'
import {Observable }from 'rxjs'; 

@Injectable( {
providedIn:'root'
})
export class CurrentUserService {

constructor(private httpService:NgxDhis2HttpClientService) {}
getCurrentUser(rootUrl) {
return new Observable(observer =>  {
this.httpService.get('me.json?fields=id,name,displayName,created,lastUpdated,email,' + 
'dataViewOrganisationUnits[id,name,level],userCredentials[username]')
.subscribe((currentUser:any) =>  {
observer.next(currentUser); 
observer.complete(); 
}, (currentUserError) => observer.error(currentUserError)); 
})
}
}
