import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Viatge } from './../models/viatge';
import { Xofer } from './../models/xofer';
import { Client } from './../models/client';
import { Cotxe } from './../models/cotxe';




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
        return this._http.get(this.url+'viatge/'+id);
    }
    getViatgeClient(id:string):Observable<any>{
        return this._http.get(this.url+'viatge2/'+id);
    }
    getViatges():Observable<any>{
        return this._http.get(this.url+'viatges');
    }
    deleteViatge(id:String):Observable<any>{
        return this._http.delete(this.url+"viatge/"+id);
    }

    guardarChofer(xofer: any) : Observable<any>{
        return this._http.post(this.url+'savexofer',xofer);
    }
    getXofers():Observable<any>{
        return this._http.get(this.url+"xofers");
    }
    getXofer(id:any):Observable<any>{
        return this._http.get(this.url+"xofer/"+id);
    }
    deleteXofer(id:any):Observable<any>{
        return this._http.delete(this.url+"xofer/"+id);
    }
    updateXofer(id:any,xofer:Xofer):Observable<any>{
        let body = JSON.stringify(xofer);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.put(this.url+"xofer/"+id,body,{headers:headers});
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
    deleteCotxe(id:any):Observable<any>{
        return this._http.delete(this.url+"cotxe/"+id);
    }
    updateCotxe(id:any,cotxe:Cotxe):Observable<any>{
        let body = JSON.stringify(cotxe);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.put(this.url+"cotxe/"+id,body,{headers: headers});
    }
    getClients():Observable<any>{
        return this._http.get(this.url+"clients");
    }
    getClient(id:string):Observable<any>{
        return this._http.get(this.url+"client/"+id);
    }
    updateClient(id,client:Client){
        let body = JSON.stringify(client);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.put(this.url+"client/"+id,body,{headers: headers});
    }
    updateViatge(id,viatge:Viatge){
        let body = JSON.stringify(viatge);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.put(this.url+"viatge/"+id,body,{headers: headers});
    }
    updatePass(id,client:Client){
        let body = JSON.stringify(client);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.put(this.url+"pass/"+id,body,{headers: headers});
    }
    deleteClient (id:any):Observable<any>{
        return this._http.delete(this.url+"client/"+id);
    }
    test ():Observable<any>{
        let headers = new HttpHeaders().set('Authorization', 'patata');
        
        return this._http.get('http://localhost:8080/test',{headers});
   
    }

    // updateClients(id,pwd,client):Observable<any>{
    //     if (pwd){
    //         return this._http.put(this.url+"client/"+id+"/si",client);
    //     }else{

    //     }
    //     return this._http.put(this.url+"client/"+id+"/no",client);
    // }
}