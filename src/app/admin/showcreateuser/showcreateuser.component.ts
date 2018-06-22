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
	form: Form[];
   constructor(private dataService: DataService, private router: Router, private http: Http) { }

  getCustomers() {   
 	  this.dataService.getdata().then(form => this.form = form);
  }
  delete(formid : string): void {
    this.dataService.delete(formid).then(() => this.getCustomers());
  }
  update(formid : string): void {
    //this.dataService.update(formid).then(() => this.getCustomers());
     this.router.navigateByUrl('/updateuser');

  }
  ngOnInit() {
  this.getCustomers();
  }

}
