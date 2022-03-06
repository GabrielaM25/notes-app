import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponentComponent } from './child-component/child-component.component';



@NgModule({
  declarations: [
    ChildComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ChildComponentComponent
  ]
})
export class ChildModule { }
