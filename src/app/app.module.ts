import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {EmbedobjModule} from './embed-obj/embed-obj.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EmbedobjModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
