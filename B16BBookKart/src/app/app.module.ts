 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MatIconModule}  from '@angular/material/icon';
import{ MatListModule}  from '@angular/material/list';
import{  MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
