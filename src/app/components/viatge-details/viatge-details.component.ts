import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/auth.service';
import { PeticionsService } from './../../services/peticions.service';
import { Viatge } from './../../models/viatge';
import { Router , ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-viatge-details',
  templateUrl: './viatge-details.component.html',
  styleUrls: ['./viatge-details.component.css']
})
export class ViatgeDetailsComponent implements OnInit {

  public token:string;
  public client:any;
  public viatge:Viatge;
  public id:string;
  public link:string;

  constructor(
    private authService:AuthenticationService,
    private petiService:PeticionsService,
    private router:Router,
    private route:ActivatedRoute,
    ) 
    {}

  ngOnInit() {
    this.detalls();
  }

  detalls(){
    this.viatge=new Viatge();
        

    if(this.authService.checkToken()){
      this.client = new Object();
      let token=this.authService.getToken();
      var body = {token:token};

      this.authService.isLogged(body).subscribe(data=>{
        let clientdata:any=data;
        this.client=clientdata.client;

        this.route.params.subscribe((params:Params) => {
          if(params.idReserva){
            this.id = params.idReserva;        
            this.petiService.getViatge(this.id).subscribe(data=>{          
              if (data.viatge.client._id==this.client._id) {  
                this.viatge=data.viatge;
                console.log(this.viatge.crodes);
                
                this.link = "localhost:4200/viatges-client";
                
              }else{
                this.router.navigate(['/'])
              }
              },error=>{
                console.log(error.error.message);
              });
          }else{
            console.log('no');
          }
        });
      }); 
    }else{
      this.router.navigate(['/auth/reserva']);
    }
  }
  

}
