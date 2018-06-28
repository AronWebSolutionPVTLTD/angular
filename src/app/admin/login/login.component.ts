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
  datas;
  	constructor(private dataService: DataService, private router: Router) { }
  	ngOnInit() {
  	
  	}
  	
 
 private save(): void {
 	 this.dataService.admin(this.form).subscribe(data =>  {
      if(data.data == "Matching"){
        this.router.navigate(['/showdata']);
       sessionStorage.setItem('email', this.form.email);
      }
      else{
        this.datas = data.data;
      }
    });    
 }
 
 onSubmit(form) {
   this.save();
 }
}
