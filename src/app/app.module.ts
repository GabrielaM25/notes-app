import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { App2Component } from './app2/app2.component';
import { TestModule } from './test/test.module';
import { GrandparentModule } from './grandparent/grandparent.module';
import { NoteComponent } from './note/note.component';
import { ToolsComponent } from './tools/tools.component';
import { CustomizeComponent } from './customize/customize.component';
import { MaxValuePipe } from './max-value.pipe';
import { MyDirectiveDirective } from './my-directive.directive';
import { PersonComponent } from './person/person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { RouterModule } from '@angular/router';
// import { RoutingExerciseComponent } from './routing-exercise/routing-exercise.component';


@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    NoteComponent,
    ToolsComponent,
    CustomizeComponent,
    MaxValuePipe,
    MyDirectiveDirective,
    PersonComponent,
    PersonDetailComponent,
    // RoutingExerciseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TestModule,
    GrandparentModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonToggleModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
