import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
   ingriedients:Product[]=[
     {id: '1', name:'eggs' ,quantity:'4 pcs'},
     {id: '2', name:'flour' , quantity:'500 g'},
     {id: '3', name:'milk' , quantity:'300 ml'}

   ];
   myNumber:number=10;
  constructor() { }

  ngOnInit(): void {
  }

}
