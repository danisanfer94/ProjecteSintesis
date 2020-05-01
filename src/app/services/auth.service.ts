import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Client } from './../models/client';
import { CookieService } from "ngx-cookie-service";


import { Global } from './global';
import { LoginObject } from '../models/loginObject';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    public url:string;
    constructor(
        private _http: HttpClient,
        private cookies: CookieService

    ){
        this.url = Global.url;
    }
   
    login(login:LoginObject) : Observable<any>{
        return this._http.post(this.url+'login',login);
    }

    registre(client: any) : Observable<any>{
        return this._http.post(this.url+'saveclient',client);
    }

    checkToken(){
        return this.cookies.check('token');
    }
    setToken(token: any) {
        this.cookies.set("token", token);
    }
    getToken() {
        return this.cookies.get("token");
    }

    isLogged(token:any){
        return this._http.post(this.url+'logged',token);
    }

    logout(){
        this.cookies.delete("token");
    }

}