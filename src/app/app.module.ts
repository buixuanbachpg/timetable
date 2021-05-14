import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { QuanlychitieuComponent } from './quanlychitieu/quanlychitieu.component';
import { QuanlychitieuListComponent } from './quanlychitieu/quanlychitieu-list/quanlychitieu-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { QuanlychitieuService } from './service/quanlychitieu.service';

@NgModule({
  declarations: [
    AppComponent,
    QuanlychitieuComponent,
    QuanlychitieuListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [QuanlychitieuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
