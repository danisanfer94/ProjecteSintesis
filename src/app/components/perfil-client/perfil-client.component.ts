import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/auth.service';
import { PeticionsService } from './../../services/peticions.service';
import { Viatge } from './../../models/viatge';
import {Router } from '@angular/router';

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
  public passerror:string;

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
    console.log(this.client);
    this.petiService.deleteClient(this.client._id).subscribe(data=>{
      console.log(data);
      window.location.replace("/");
    },
    error => {
      console.log(<any>error);
    });
  }

  onSubmit(form){
    console.log(this.client);
    this.petiService.updateClient(this.client._id, this.client).subscribe(data => {
        this.passerror=""
        this.missatge=true;
        console.log(data);
        console.log("Input form capturat");
      },
      error=>{
        this.missatge=false;
        this.passerror = error.error.message;
        console.log(this.passerror);      
      });
  }

  updatePass(form){
    console.log(this.client);
    this.client.contrasenya = this.contrassenya;

    this.petiService.updatePass(this.client._id, this.client).subscribe(data => {
        this.missatge=true;
        console.log(data);
        console.log("Input form capturat");
      });
  }

}