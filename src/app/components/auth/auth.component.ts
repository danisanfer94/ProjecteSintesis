import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/auth.service';
import { Client } from 'src/app/models/client';
import { LoginObject } from 'src/app/models/loginObject';
import { Router , ActivatedRoute, Params } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthenticationService]

})
export class AuthComponent implements OnInit {
  public nom:string;
  public cognoms:string;
  public telefon:string;
  public email:string;
  public password:string;
  public client:Client;
  public loginObject:LoginObject;
  public emaillogin:string;
  public passwordlogin:string;
  public origen:string;
  public error:string;
  public passerror:string;
  public logreg:string;

  public passwordConfirm:string;
  public errorPass:string;
  

  
  constructor(
    private authService: AuthenticationService,
    private route:ActivatedRoute,
    private router:Router
    ) {
    this.client = new Client();
    this.loginObject = new LoginObject();
   }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {      
      if(params.origen){
        this.origen = params.origen; 
      }
    });

    this.route.params.subscribe((params:Params) => {      
      if(params.logreg){
        this.logreg = params.logreg; 
      }
    });
    
    if(this.logreg=='login'){
      $('.registrat').hide();
      $('.logejat').show();
      }
    else if(this.logreg=='registre'){
      $('.logejat').hide();
      $('.registrat').show();
      }

    $('.white-panel').animate({ opacity: 0 }, 0);
    $('.white-panel').animate({ opacity: 1, top: "-40px" }, 'slow');
  }

  registre(){
    this.client.nom=this.nom;
    this.client.cognoms=this.cognoms;
    this.client.telefon=this.telefon;
    this.client.email=this.email;
    if(this.passwordConfirm==this.password){
      this.client.contrasenya=this.password;
      this.client.rol="client";
      this.authService.registre(this.client).subscribe(data=>{
        console.log('Usuari registrat!!');
          
          this.authService.setToken(data.client.token);
          if(this.origen=='nav'){
            window.location.href = '/';
          }else{
            window.location.href = '/reserva';
          }
        
      },error=>{
        this.error = error.error.message;
        console.log(this.error);
        
      });
    }else{
      console.log('no coincide');
      
      this.errorPass = "Les contrasñas no coincideixen"
    }
    
    
  }

  login(){
    this.loginObject.username=this.emaillogin;
    this.loginObject.password=this.passwordlogin;    
    this.authService.login(this.loginObject).subscribe(data=>{
      console.log(data);
      if(data.token){
        this.authService.setToken(data.token);
        if(this.origen=='nav'){
          window.location.href = '/';
        }else{
          window.location.href = '/reserva';
        } 
      }
    },error=>{
      this.passerror = error.error.message;
      console.log(this.passerror);
      
    });
  }

}
