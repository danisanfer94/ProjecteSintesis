import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Viatge } from './../models/viatge';
import { Xofer } from './../models/xofer';
import { Client } from './../models/client';




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
    getViatges():Observable<any>{
        return this._http.get(this.url+'/viatges');
    }

    guardarChofer(xofer: any) : Observable<any>{
        return this._http.post(this.url+'/savexofer',xofer);
    }
    getXofers():Observable<any>{
        return this._http.get(this.url+"xofers");
    }
    guardarCotxe(cotxe:any): Observable<any>{
        return this._http.post(this.url+"savecotxe",cotxe);
    }
    getCotxes():Observable<any>{
        return this._http.get(this.url+"cotxes");
    }
    getCotxe(id:any):Observable<any>{
        return this._http.get(this.url+"cotxe/"+id);
    }
    getClients():Observable<any>{
        return this._http.get(this.url+"clients");
    }
    updateClient(id,client:Client){
        let body = JSON.stringify(client);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.put(this.url+"client/"+id,body,{headers: headers});
    }
    updatePass(id,client:Client){
        let body = JSON.stringify(client);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.put(this.url+"pass/"+id,body,{headers: headers});
    }
    deleteClient (id:any):Observable<any>{
        return this._http.delete(this.url+"client/"+id);
    }

    // updateClients(id,pwd,client):Observable<any>{
    //     if (pwd){
    //         return this._http.put(this.url+"client/"+id+"/si",client);
    //     }else{

    //     }
    //     return this._http.put(this.url+"client/"+id+"/no",client);
    // }
}