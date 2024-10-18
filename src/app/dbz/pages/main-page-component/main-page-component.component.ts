import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-main-page-component',
  templateUrl: './main-page-component.component.html',
  styleUrls: ['./main-page-component.component.css']
})
export class MainPageComponent{
  table:boolean=false;
   public character:Character[]=[
    {
      name:"crilin",
      power:100
    },
    {
      name:"picolo",
      power:3000
    }
   ]
  showtable():void{
    this.table=true
  }

}
