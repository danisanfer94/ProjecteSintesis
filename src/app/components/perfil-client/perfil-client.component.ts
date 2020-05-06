import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/auth.service';
import { PeticionsService } from './../../services/peticions.service';
import { Viatge } from './../../models/viatge';
import {Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil-client',
  templateUrl: './perfil-client.component.html',
  styleUrls: ['./perfil-client.component.css'],
  providers: [PeticionsService]
})
export class PerfilClientComponent implements OnInit {

  public token:string;
  public client:any;
  public contrassenya:string;
  public missatge:boolean;

  constructor(
    private authService:AuthenticationService,
    private petiService:PeticionsService,
    private router:Router,
    ) 
    {
      if(this.authService.checkToken()){
        this.client = new Object();
        let token=this.authService.getToken();
        var body = {token:token};
        this.authService.isLogged(body).subscribe(data=>{
          let clientdata:any=data;
          this.client=clientdata.client;
          console.log(this.client);
          
        },err=>{
          console.log(err);
        }); 
      }else{
        this.router.navigate(['/']);
      }
    }

  ngOnInit() {
    this.contrassenya="";
  }

  esborrar(){
    this.petiService.deleteClient(this.client._id).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/']);
    },
    error => {
      return Observable.throw(error);
    });
  }

  onSubmit(form){
    console.log(this.client);
    this.petiService.updateClient(this.client._id, this.client).subscribe(data => {
        this.missatge=true;
        console.log(data);
        console.log("Input form capturat");
      },
      error => {
        console.log(<any>error);
      });
  }

  // public updateClient(){
  //   if(this.contrassenya != ""){
  //     this.client.contrasenya=this.contrassenya;

  //     this.petiService.updateClients(this.client._id, true, this.client).subscribe(data=>{
  //       console.log(data);
  //       window.location.reload();
  //     },error=>{
  //       console.log(error);
        
  //     });
  //   }else{
  //     this.petiService.updateClients(this.client._id, false, this.client).subscribe(data=>{
  //       console.log(data);
  //       window.location.reload();
  //     },error=>{
  //       console.log(error.error);
  //     });
  //   }


  // }

}
