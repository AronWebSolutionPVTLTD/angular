import { Component, OnInit } from '@angular/core';
import { Form } from '../../form';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

	form = new Form;
  constructor(private dataService: DataService, private router: Router, private http: Http, public authService: AuthService) { }

  ngOnInit() { 
  	this.dataService.GetEmpData().subscribe(form => this.form = form); 

  	/*function isLoggedIn() {
    return this.authService.isLoggedIn();
  }*/
  }
  

}
