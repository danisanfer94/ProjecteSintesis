import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http'; 

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
}