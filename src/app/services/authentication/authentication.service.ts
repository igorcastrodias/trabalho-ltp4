import { Injectable } from "@angular/core";
import { Login } from './login.model';
import { HttpClient } from '@angular/common/http';
import { URL_RESTAPI } from 'src/app/app.api';
import { LocalStorageHelper } from 'src/app/helpers/localStorageHelper';


@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthenticationSerivce{

    isAuthenticated() {
        return LocalStorageHelper.getLocalStorage("user") !== null ? true : false;
    }
    constructor(private http: HttpClient){}

    authenticate(login: Login){
        return this.http.get<Login[]>(URL_RESTAPI+"/logins?email_like="+login.email);
    }
}