import { Component, OnInit } from '@angular/core';
import { Form } from '../../form';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

	form: Form[];
  constructor(private dataService: DataService, private router: Router, private http: Http) { }
   
  getCustomers() {   
 	var getdata = this.dataService.getdata().then(form => this.form = form);
  }
   
  
  ngOnInit() { 
  	this.getCustomers();
  }

}
