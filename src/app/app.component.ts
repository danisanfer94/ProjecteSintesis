import { Component , OnInit} from '@angular/core';
import { AuthenticationService } from './services/auth.service';
import { Client } from 'src/app/models/client';

import { PeticionsService } from './services/peticions.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineTaxi';
  public token:string;
  public client:any;
  constructor(
    private authService:AuthenticationService,
    private petiService:PeticionsService
    ) 
    {
      if(this.authService.checkToken()){
        this.client = new Object();
        let token=this.authService.getToken();
        var body = {token:token};
        this.authService.isLogged(body).subscribe(data=>{
          let clientdata:any=data;
          this.client=clientdata.client;
          
        }); 

      }  
    }

  ngOnInit(){
  }
  public logout(){
    this.authService.logout();
    window.location.replace("/");
  }

  test(){
    this.petiService.test().subscribe(data=>{
      console.log(data.message);
    })
  }
  
}
