import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Viatge } from './../models/viatge';

import { Global } from './global';

@Injectable({
    providedIn: 'root'
})
export class PeticionsService {
    
    public url:string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    guardarViatge(viatge:Viatge):Observable<any>{
        return this._http.post(this.url+'saveviatge/'+viatge.client,viatge);
    }
    getViatge(id:string):Observable<any>{
        return this._http.get(this.url+'/viatge/'+id);
    }
}