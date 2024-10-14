import { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import { SolicitudComponent } from "./components/solicitudCredito/solicitud/solicitud.component";
import { Caja1Component } from './components/solicitudCredito/caja1/caja1.component';
import { Caja2Component } from './components/solicitudCredito/caja2/caja2.component';

@NgModule({
    declarations:[
       SolicitudComponent,
       Caja1Component,
       Caja2Component
    ],
    exports:[
        SolicitudComponent
        
    ],
    imports:[
        CommonModule
    ]
    
})

export class templateModule{

}