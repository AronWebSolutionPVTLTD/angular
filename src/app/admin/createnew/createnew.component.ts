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
datas;
  	constructor(private dataService: DataService, private router: Router) { }
  	ngOnInit() {
  	}
  	
 
 private save(): void {
 	 this.dataService.createnewEmp(this.form).subscribe(data => this.datas = data.data); 
 }
 
 onSubmit(form) {
   this.save();
 }
  
 }
