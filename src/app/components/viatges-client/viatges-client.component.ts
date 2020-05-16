import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/auth.service';
import { PeticionsService } from './../../services/peticions.service';
import { Viatge } from './../../models/viatge';
import {Router } from '@angular/router';

@Component({
  selector: 'app-viatge-client',
  templateUrl: './viatges-client.component.html',
  styleUrls: ['./viatges-client.component.css']
})
export class ViatgesClientComponent implements OnInit {

  public token:string;
  public client:any;
  public viatges:any;
  public id:string;

  constructor(
    private authService:AuthenticationService,
    private petiService:PeticionsService,
    private router:Router,
    ) 
    {
    }

  ngOnInit() {
    this.getViatge();
  }  

  getViatge(){
    if(this.authService.checkToken()){
      this.client = new Object();
      let token=this.authService.getToken();
      var body = {token:token};
      this.authService.isLogged(body).subscribe(data=>{
        let clientdata:any=data;
        this.client=clientdata.client;
        console.log(this.client);
        console.log(this.client._id);

        this.petiService.getViatgeClient(this.client._id).subscribe(data=>{
          console.log(data);
          console.log(this.client._id);
          this.viatges=data.viatge;
          },err=>{
          console.log(err);
          console.log(this.client._id);
          });    
        
      },err=>{
        console.log(err);
      }); 
    }else{
      this.router.navigate(['/']);
    }

  }
  
}
