import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { App2Component } from './app2/app2.component';
import { TestModule } from './test/test.module';
import { GrandparentModule } from './grandparent/grandparent.module';


@NgModule({
  declarations: [
    AppComponent,
    App2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TestModule,
    GrandparentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
