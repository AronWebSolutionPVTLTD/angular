import { Component, OnInit,Input } from '@angular/core';
import { Form } from '../form';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/observable/from';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

	form = new Form;
  	constructor(private dataService: DataService, private router: Router) { }

  	ngOnInit() {
  	}
 
 private save(): void {
     var getresponse = this.dataService.match(this.form).then(form => console.log(this.form.invalide = form));
        sessionStorage.setItem('email', this.form.email);
 }

 onSubmit(form) {
     this.save();
 }  
 }