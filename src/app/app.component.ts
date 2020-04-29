import { Component , OnInit} from '@angular/core';
import { AuthenticationService } from './services/auth.service';
import { Client } from 'src/app/models/client';



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
    private authService:AuthenticationService
    )
    {
      if(this.authService.checkToken()){
        this.client = new Object();
        let token=this.authService.getToken();
        console.log(token);
        var body = {token:token};
        this.authService.isLogged(body).subscribe(data=>{
          let clientdata:any=data;
          console.log(clientdata.client);
          this.client=clientdata.client;
        }); 

      }  
    }

  ngOnInit(){
    
   
   
  }

  
}
