import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DataService } from './data.service';
import { LoginComponent } from './admin/login/login.component';
import { ShowdataComponent } from './admin/showdata/showdata.component';
import { CreatenewComponent } from './admin/createnew/createnew.component';
import { UpdateuserComponent } from './admin/updateuser/updateuser.component';
import { ShowcreateuserComponent } from './admin/showcreateuser/showcreateuser.component';
import { HeaderComponent } from './admin/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    LoginComponent,
    ShowdataComponent,
    CreatenewComponent,
    UpdateuserComponent,
    ShowcreateuserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
