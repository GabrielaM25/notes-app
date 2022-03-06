import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentModule } from './parent/parent.module';
import { ChildComponentComponent } from './parent/child/child-component/child-component.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ParentModule
  ],
  exports:[
    ChildComponentComponent
  ]
})
export class GrandparentModule { }
