import { Component } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent {
  titleSolicitud:string="Solicitud de crédito"
  caja1:boolean=false
  caja2:boolean=false
  showcaja1():void{
    this.caja1=true
    this.caja2=false

  }
  showcaja2():void{
    this.caja1=false
    this.caja2=true
  }
}
