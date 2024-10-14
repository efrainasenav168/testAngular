import { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import { SolicitudComponent } from "./components/solicitudCredito/solicitud/solicitud.component";
import { Caja1Component } from './components/solicitudCredito/caja1/caja1.component';

@NgModule({
    declarations:[
       SolicitudComponent,
       Caja1Component
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