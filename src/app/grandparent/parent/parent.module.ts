import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildModule } from './child/child.module';
import { ChildComponentComponent } from './child/child-component/child-component.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChildModule
  ],
  exports:[
    ChildComponentComponent
  ]
})
export class ParentModule { }
