import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public token:string;
  public client:any;
  constructor(
    private authService:AuthenticationService
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

  ngOnInit() {
  }

}
