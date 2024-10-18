import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
 
})
export class ListComponent {
  title:string="lstado de heroes"
  @Input("characterTest")
  public characterList:Character[]=[{
    name:"trunks",
    power:10
  },
   {
    name:"bills",
    power:100000000
   }   
  ]
}
