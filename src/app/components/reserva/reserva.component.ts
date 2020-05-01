import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/auth.service';
import { PeticionsService } from './../../services/peticions.service';
import { Viatge } from './../../models/viatge';
import {Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  public token:string;
  public client:any;
  public viatge:Viatge;

  public origen:string;
  public desti:string;
  public places:number;
  public data:string;
  public hora:string;

  constructor(
    private authService:AuthenticationService,
    private petiService:PeticionsService,
    private router:Router,
    ) 
    {
      this.viatge=new Viatge();
      if(this.authService.checkToken()){
        this.client = new Object();
        let token=this.authService.getToken();
        var body = {token:token};
        this.authService.isLogged(body).subscribe(data=>{
          let clientdata:any=data;
          this.client=clientdata.client;
          console.log(this.client);
        }); 
      }else{
        this.router.navigate(['/auth']);
      }
    }

  ngOnInit() {
    // $(".reserva").fadeOut();
  }

  public reserva(){
    this.viatge.origen=this.origen;
    this.viatge.desti=this.desti;
    this.viatge.places=this.places;
    this.viatge.data=this.data;
    this.viatge.hora=this.hora;
    this.viatge.client=this.client._id;
    console.log(this.viatge);
    this.petiService.guardarViatge(this.viatge).subscribe(data=>{
      console.log(data);
      $(".reserva").fadeOut();
    });
  }

}
