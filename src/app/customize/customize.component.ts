import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  title:string= "Title";
  subtitle:string = "Subtitle";
  titleBackground:string ="";
  text:string="";
  boldStyle:string="";
  italicStyle:string="";
  underlineStyle:string="";
  public selectedVal: string="";

  constructor() { }

  // ngOnInit(): void {
  // }
  setBold(){
  
    this.boldStyle="bold";
    this.italicStyle="";
    this.underlineStyle="";
  }
  setItalic(){
    this.boldStyle="";
    this.italicStyle="italic";
    this.underlineStyle="";
  }
  setUnderline(){
    this.boldStyle="";
    this.italicStyle="";
    this.underlineStyle="underline";
  }
  none(){
    this.boldStyle="";
    this.italicStyle="";
    this.underlineStyle="";
  }
  restoreCustomization(){
    this.title='Title';
    this.titleBackground='';
    this.text='';
    //this.textStyle='';
  }
  testMaxNumber(a: number ,b: number){
    if( a < b){
      return b;
    }else if ( a > b){
      return a;
    }else {
      return a;
    }

  }

ngOnInit(){
} 
// ngOnInit(){
//   this.selectedVal ='draft';
// } 

// public onValChange(val: string) {
//   this.selectedVal = val;
//   console.log(val);
// }
}
