import { Component, OnInit } from '@angular/core';
import { Form } from '../../form';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-showcreateuser',
  templateUrl: './showcreateuser.component.html',
  styleUrls: ['./showcreateuser.component.css']
})
export class ShowcreateuserComponent implements OnInit {
	form = new Form;
   constructor(private dataService: DataService, private router: Router, private http: Http)
    { }

 
  delete = function(id) {  
    this.dataService.deleteUser(id)  
    .subscribe(data =>   { alert(data.data) ; this.ngOnInit();})   
  }
  update = function(emailid) {
    sessionStorage.setItem('emailid', emailid);
     this.router.navigateByUrl('/updateuser');

  }
  ngOnInit() {
    this.dataService.GetEmpData().subscribe(form => this.form = form);
  }
}
