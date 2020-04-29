import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/auth.service';
import { Client } from 'src/app/models/client';
import { LoginObject } from 'src/app/models/loginObject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
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

  
  constructor(private authService: AuthenticationService,private router:Router) {
    this.client = new Client();
    this.loginObject = new LoginObject();
   }

  ngOnInit() {
    
  }

  registre(){
    this.client.nom=this.nom;
    this.client.cognoms=this.cognoms;
    this.client.telefon=this.telefon;
    this.client.email=this.email;
    this.client.contrasenya=this.password;
    this.authService.registre(this.client).subscribe(data=>{
      this.authService.setToken(data.token);
      window.location.href = '/';      
    });
    
  }

  login(){
    this.loginObject.username=this.emaillogin;
    this.loginObject.password=this.passwordlogin;
    this.authService.login(this.loginObject).subscribe(data=>{
      this.authService.setToken(data.token);
      window.location.href = '/'; 
      
    });
  }

}
