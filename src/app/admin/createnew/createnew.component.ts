import { Component, OnInit } from '@angular/core';
import { Form } from '../../form';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createnew',
  templateUrl: './createnew.component.html',
  styleUrls: ['./createnew.component.css']
})
export class CreatenewComponent implements OnInit {

form = new Form;
  submitted = false;
  	constructor(private dataService: DataService, private router: Router) { }
  	ngOnInit() {
  	}
  	
 
 private save(): void {
 	var getresponse = this.dataService.create(this.form).then(form => this.form = form); 
 }
 
 onSubmit(form) {
 	 this.submitted = true;
   this.save();
 }
  
 }
