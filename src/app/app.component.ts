import { Component , OnInit} from '@angular/core';
import { AuthenticationService } from './services/auth.service';
import { Client } from 'src/app/models/client';

import { PeticionsService } from './services/peticions.service';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineTaxi';
  public token:string;
  public client:any;
  public cookie:boolean;  

  constructor(
    private authService:AuthenticationService,
    private petiService:PeticionsService,
    ){
      if(this.authService.checkToken()){
        this.client = new Object();
        let token=this.authService.getToken();
        var body = {token:token};
        this.authService.isLogged(body).subscribe(data=>{
          let clientdata:any=data;
          this.client=clientdata.client;
          
        }); 
      }
      if(this.authService.checkCookie()){
        this.cookie=false; 
      }else{
        this.cookie=true;
      }
    }


  ngOnInit(){
    if(this.cookie){
      $('#cookieModal').modal('show');  
    }
  }
  public logout(){
    this.authService.logout();
    window.location.replace("/");
  }

  //test(){
  //  this.petiService.test().subscribe(data=>{
  //    console.log(data.message);
  //  })
 // }
  setCookie(){
    this.authService.acceptCookie();
  }
  
}
