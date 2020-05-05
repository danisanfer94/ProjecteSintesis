import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/auth.service';
import { PeticionsService } from './../../services/peticions.service';
import {Router } from '@angular/router';

import { Xofer } from './../../models/xofer';
import { Cotxe } from './../../models/cotxe';
import { Client } from 'src/app/models/client';

declare var $:any;

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {

  public token:string;
  public clientlog:any;
  public xofer:Xofer;
  public cotxe:Cotxe;
  public xoferlog:any;
  public admin:boolean;
  public client:Client;

  constructor(
    private authService:AuthenticationService,
    private petiService:PeticionsService,
    private router:Router,
  ) { 
    if(this.authService.checkToken()){
      this.clientlog = new Object();
      let token=this.authService.getToken();
      var body = {token:token};
      this.authService.isLoggedAdmin(body).subscribe(data=>{
        let clientdata:any=data;
        this.clientlog=clientdata.client;
        this.admin=true;
      },err=>{
        this.admin=false;     
        this.authService.isLoggedXofer(body).subscribe(data=>{
          let xoferlogdata:any=data;
          this.xoferlog=xoferlogdata.xofer;
          console.log(data);
          
        },err=>{
          this.router.navigate(['/']);
        })

      }); 
    }else{
      this.router.navigate(['/']);
    }
    this.xofer=new Xofer();
    this.cotxe=new Cotxe();
    this.client=new Client();
  }

  public viatges:Array<any>;
  public xofers:Array<any>;
  public cotxes:Array<any>;
  public clients:Array<any>;

  public xoferNom:string;
  public xoferCognoms:string;
  public xoferEmail:string;
  public xoferPassword:string;
  public xoferTelefon:string;
  public xoferDataCarnet:string;

  public cotxeMatricula:string;
  public cotxeMarca:string;
  public cotxeModel:string;
  public cotxePlaces:number;
  public cotxeDataITV:string;
  public cotxedataSeguro:string;



  ngOnInit() {
  
  
  }

  formChofer(){
    $(".contenido").hide();
    $(".formChofer").show();
  }
  formCotxe(){
    $(".contenido").hide();
    $(".formCotxe").show()
  }
  getXofers(){
    $(".contenido").hide();
    $(".totsXofers").show();
    this.petiService.getXofers().subscribe(data=>{
      this.xofers=data.xofers;
      console.log(this.xofers);
      
      
    },err=>{
      console.log(err);
      
    })
  }
  getCotxes(){
    $(".contenido").hide();
    $(".totsCotxes").show();
    this.petiService.getCotxes().subscribe(data=>{
      this.cotxes=data.cotxes;
      console.log(data);
    },err=>{
      console.log(err);
      
    })
  }
  getClients(){
    $(".contenido").hide();
    $(".totsClients").show();
    this.petiService.getClients().subscribe(data=>{
      console.log(data);
      this.clients=data.clients;
      
    },err=>{
      console.log(err);
    });
  }
  getViatges(){
    $(".contenido").hide();
    $(".totsViatges").show();
    this.petiService.getViatges().subscribe(data=>{
    console.log(data);
    this.viatges=data.viatges;
    
    },err=>{
    console.log(err);
    
    });
  }
  getCotxe(id:string){
    $(".contenido").hide();
    $(".detallCotxe").show();
    this.petiService.getCotxe(id).subscribe(data=>{
      this.cotxe=data.cotxe;
      console.log(this.cotxe);
      
    },err=>{
      console.log(err);
    })  
  }
  xoferRegistre(){
    this.xofer.nom=this.xoferNom;
    this.xofer.cognoms=this.xoferCognoms;
    this.xofer.mail=this.xoferEmail;
    this.xofer.contraseña=this.xoferPassword;
    this.xofer.telefon=this.xoferTelefon;
    this.xofer.dataCarnet=this.xoferDataCarnet;
    console.log(this.xofer);
    

    this.petiService.guardarChofer(this.xofer).subscribe(data=>{
      console.log('Xofer registrat!!');
      
    },err=>{
      console.log(err.error.message);
      
    })

  }
  cotxeRegistre(){
    this.cotxe.matricula=this.cotxeMatricula;
    this.cotxe.model=this.cotxeModel;
    this.cotxe.marca=this.cotxeMarca;
    this.cotxe.places=this.cotxePlaces;
    this.cotxe.dataITV=this.cotxeDataITV;
    this.cotxe.dataSeguro=this.cotxedataSeguro;
    console.log(this.cotxe);

    this.petiService.guardarCotxe(this.cotxe).subscribe(data=>{
      console.log("Cotxe registrat");
      
    },err=>{
      console.log(err);
      
    })
    
  }
}
