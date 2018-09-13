import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@hisptz/ngx-dhis2-http-client'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpService : NgxDhis2HttpClientService) { }

  getAllUsers(){
    return this.httpService.get(`users.json?fields=id,name&paging=false`);
  }
}
