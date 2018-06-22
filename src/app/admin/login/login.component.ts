import { Component, OnInit,Input } from '@angular/core';
import { Form } from '../../form';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new Form;
  	constructor(private dataService: DataService, private router: Router) { }
  	ngOnInit() {
  	
  	}
  	
 
 private save(): void {
 	var getresponse = this.dataService.admin(this.form).then(form => this.form.invalide = form);
  	sessionStorage.setItem('email', this.form.email);
 }
 
 onSubmit(form) {
   this.save();
 }
}
