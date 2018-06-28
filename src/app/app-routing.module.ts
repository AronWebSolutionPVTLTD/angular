import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { ShowdataComponent } from './admin/showdata/showdata.component';
import { CreatenewComponent } from './admin/createnew/createnew.component';
import { UpdateuserComponent } from './admin/updateuser/updateuser.component';
import { ShowcreateuserComponent } from './admin/showcreateuser/showcreateuser.component';
import { HeaderComponent } from './admin/header/header.component';

const routes: Routes = [
	  { path: '', redirectTo: '/login', pathMatch: 'full' },
  	{ path: 'app', component: AppComponent },
  	{ path: 'login',  component: IndexComponent },
  	{ path: 'registration', component: DashboardComponent },
    { path: 'admin',  component: LoginComponent },
    { path: 'showdata',  component: ShowdataComponent },
    { path: 'createnew',  component: CreatenewComponent },
    { path: 'updateuser',  component: UpdateuserComponent },
    { path: 'showcreateuser',  component: ShowcreateuserComponent },
    { path: 'header',  component: HeaderComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { 
}
