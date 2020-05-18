import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/auth.service';
import { PeticionsService } from './../../services/peticions.service';
import {Router } from '@angular/router';

import { Xofer } from './../../models/xofer';
import { Cotxe } from './../../models/cotxe';
import { Client } from 'src/app/models/client';
import { Viatge } from 'src/app/models/viatge';

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
  public viatge:Viatge;

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
        this.xoferlog=new Xofer();
        
      },err=>{
        this.admin=false;     
        this.authService.isLoggedXofer(body).subscribe(data=>{
          let xoferlogdata:any=data;
          this.xoferlog=xoferlogdata.xoferConsultat[0];
          
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
    this.viatge=new Viatge();
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

  public clientNom:string;
  public clientCognoms:string;
  public clientEmail:string;
  public clientContrasenya:string;
  public clientTelefon:string;
  public clientRol:string;

  public viatgeOrigen:string;
  public viatgeDesti:string;
  public viatgePlaces:number;
  public viatgeData:string;
  public viatgeHora:string;
  public viatgeComentari:string;
  public viatgeClient:any;

  public cotxeId:string;
  public xoferId:string;
  public preuAprox:string;
  public viatgeTarifa:string;

  public viatgeXofer:any;
  public viatgeCotxe:any;




  ngOnInit() {
  
  
  }

  formChofer(){
    $(".contenido").hide();
    $(".formChofer").show();
  }
  getXofers(){
    $(".contenido").hide();
    $(".totsXofers").show();
    this.petiService.getXofers().subscribe(data=>{
      this.xofers=data.xofers;
      
      
    },err=>{
      console.log(err);
      
    })
  }
  detallXofer(id:string){
    $(".contenido").hide();
    $(".detallXofer").show();    
    this.petiService.getXofer(id).subscribe(data=>{
      this.xofer=data.xoferConsultat;
      console.log(this.xofer);
      
    },err=>{
      console.log(err);
    })
  }
  eliminarXofer(id:string){
    $(".contenido").hide();
    $(".totsXofers").show();
    this.petiService.deleteXofer(id).subscribe(data=>{
      this.petiService.getXofers().subscribe(data2=>{
        this.xofers=data2.xofers;
        console.log(this.xofers);
      },err=>{
        console.log(err);
        
      })
    },err=>{
      console.log(err);
    })
  }
  editarXofer(id:string){
    $(".contenido").hide();
    $(".editarXofer").show();
    this.petiService.getXofer(id).subscribe(data=>{
      this.xofer=data.xoferConsultat;
      console.log(this.xofer);
      
    },err=>{
      console.log(err);
    })
  }
  xoferUpdate(id:string){
    $(".contenido").hide();
    $(".totsXofers").show();
    console.log(id);
    console.log(this.xofer);
    
    this.petiService.updateXofer(id,this.xofer).subscribe(data=>{
      this.petiService.getXofers().subscribe(data=>{
        this.xofers=data.xofers;
        console.log(this.xofers);
        
        
      },err=>{
        console.log(err);
        
      })
    },err=>{
      console.log(err);
    })
  }
  formCotxe(){
    $(".contenido").hide();
    $(".formCotxe").show()
    console.log(this.admin);
    
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
  editarCotxe(id:string){
    $(".contenido").hide();
    $(".editarCotxe").show();
    this.petiService.getCotxe(id).subscribe(data=>{
      this.cotxe=data.cotxe;
    },err=>{
      console.log(err);
      
    })
  }
  cotxeUpdate(id:string){
    $(".contenido").hide();
    $(".totsCotxes").show();
    
    this.petiService.updateCotxe(id,this.cotxe).subscribe(data=>{
      this.petiService.getCotxes().subscribe(data=>{
        this.cotxes=data.cotxes; 
      },err=>{
        console.log(err);
      })
    },err=>{
      console.log(err);
    })
  }
  eliminarCotxe(id:string){
    $(".contenido").hide();
    $(".totsCotxes").show();
    console.log(id);
    
    this.petiService.deleteCotxe(id).subscribe(data=>{
      this.petiService.getCotxes().subscribe(data2=>{
        this.cotxes=data2.cotxes;
      },err=>{
        console.log(err);       
      })
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
  detallClient(id:string){
    $(".contenido").hide();
    $(".detallClient").show();
    this.petiService.getClient(id).subscribe(data=>{
      this.client=data.client;
    },err=>{
      console.log(err);
      
    })
  }
  formClient(){
    $(".contenido").hide();
    $(".formClient").show();
  }
  editarClient(id:string){
    $(".contenido").hide();
    $(".editarClient").show();
    this.petiService.getClient(id).subscribe(data=>{
      this.client=data.client;
    },err=>{
      console.log(err);
    })
  }
  clientUpdate(id:string){
    $(".contenido").hide();
    $(".totsClients").show();
    this.petiService.updateClient(id,this.client).subscribe(data=>{
      this.petiService.getClients().subscribe(data=>{
        this.clients=data.clients;
      },err=>{
        console.log(err);
      })
    },err=>{
      console.log(err);
    })
  }
  eliminarClient(id:string){
    $(".contenido").hide();
    $(".totsClients").show();
    
    this.petiService.deleteClient(id).subscribe(data=>{
      this.petiService.getClients().subscribe(data2=>{
        this.clients=data2.clients;
      },err=>{
        console.log(err);       
      })
    },err=>{
      console.log(err);
    })
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
  formViatge(){
    $(".contenido").hide();
    $(".formViatge").show();
    this.petiService.getClients().subscribe(data=>{
      this.clients=data.clients;

    },err=>{
      console.log(err);
      
    });
  }
  detallViatge(id:string){
    this.petiService.getViatge(id).subscribe(data=>{
      this.viatge=data.viatge;
      this.viatgeClient=this.viatge.client;
      this.viatgeXofer=this.viatge.xofer;
      this.viatgeCotxe=this.viatge.cotxe;
      this.getCotxes();
      this.getXofers();
      $(".contenido").hide();
      $(".detallViatge").show();
    })
  }
  eliminarViatge(id:string){
    $(".contenido").hide();
    $(".totsViatges").show();
    this.petiService.deleteViatge(id).subscribe(data=>{
      console.log(data);
      this.petiService.getViatges().subscribe(data2=>{
        console.log(data2);
        this.viatges=data2.viatges;
        
        },err=>{
        console.log(err);
        
        });
    },err=>{
      console.log(err);
      
    })
  }
  editarViatge(id:string){
    $(".contenido").hide();
    $(".editarViatge").show();
    this.petiService.getViatge(id).subscribe(data=>{
      this.viatge=data.viatge;
    },err=>{
      console.log(err);
      
    })
  }
  viatgeUpdate(id:string){
    $(".contenido").hide();
    $(".totsViatges").show();
    this.petiService.updateViatge(id,this.viatge).subscribe(data=>{
      this.petiService.getViatges().subscribe(data2=>{
        this.viatges=data2.viatges;
      },err=>{
        console.log(err);
      })
    },err=>{
      console.log(err);
    })
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
    this.xofer.telefon=this.xoferTelefon;
    this.xofer.dataCarnet=this.xoferDataCarnet;
    console.log(this.xofer);
    

    this.petiService.guardarChofer(this.xofer).subscribe(data=>{
      console.log('Xofer registrat!!');
      $(".contenido").hide();
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
      $(".contenido").hide();
    },err=>{
      console.log(err);
      
    })
    
  }
  clientRegistre(){
    this.client.nom=this.clientNom;
    this.client.cognoms=this.clientCognoms;
    this.client.email=this.clientEmail;
    this.client.contrasenya=this.clientContrasenya;
    this.client.telefon=this.clientTelefon;
    this.client.rol='client';

    this.authService.registre(this.client).subscribe(data=>{
      console.log('Client registrat!!');
      $(".contenido").hide();
    })
  }
  viatgeRegistre(){
    this.viatge.origen=this.viatgeOrigen;
    this.viatge.desti=this.viatgeDesti;
    this.viatge.hora=this.viatgeHora;
    this.viatge.data=this.viatgeData;
    this.viatge.places=this.viatgePlaces;
    this.viatge.client=this.viatgeClient;
    this.viatge.comentari=this.viatgeComentari;
    this.viatge.confirmat="Pendent";

    this.petiService.guardarViatge(this.viatge).subscribe(data=>{
      console.log("Viatge registrat");
      this.getViatges();
    })
  }
  confirmarViatge(id:string){
    $(".contenido").hide();
    $(".totsViatges").show();
    this.viatge.xofer=this.xoferId;
    this.viatge.cotxe=this.cotxeId;
    this.viatge.preuAprox=this.preuAprox;
    this.viatge.tarifa=this.viatgeTarifa;
    this.viatge.confirmat="Confirmat"
    this.petiService.updateViatge(id,this.viatge).subscribe(data=>{
      this.petiService.getViatges().subscribe(data2=>{
        this.viatges=data2.viatges;
      },err=>{
        console.log(err);
      })
    },err=>{
      console.log(err);
    })
  }
}
