import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/auth.service';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class TarifaComponent implements OnInit {

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
