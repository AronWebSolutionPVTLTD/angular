import { Component, OnInit,  EventEmitter, Output } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Form } from '../form';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  invalide: string;
	form = new Form;
  submitted = false;
  datas;
  constructor(private dataService: DataService, private router: Router) { }
     email : string;
     valbutton ="update"; 
  	ngOnInit() {
      this.email = sessionStorage.getItem('email');
      this.form.email = this.email;
      
      if (!this.email) {
        this.router.navigate(['/']);
      }
        //this.dataService.GetUser().subscribe(form => this.form = form)
       // this.dataService.GetUser().subscribe(data =>  this.Repdata = data)
      
  	}

 private save(): void {
  this.form.mode= this.valbutton; 
 	this.dataService.saveUser(this.form).subscribe(data => this.datas = data.data);
 }
 
 onSubmit(form) {
   this.submitted = true;
   this.save();
}
}
