import { Component, OnInit,Input } from '@angular/core';
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

  constructor(private dataService: DataService) { }
     email : string;
  	ngOnInit() {
      this.email = sessionStorage.getItem('email');
      this.form.email = this.email;
      
       // this.dataService.showdashboard(this.email).then(form => this.form = form);
      
  	}

 private save(): void {
 	this.dataService.dashboard(this.form).then(form => this.form.invalide = form);
 }
 
 onSubmit(form) {
   this.submitted = true;
   this.save();
}
}
