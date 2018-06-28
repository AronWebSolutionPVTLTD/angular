import { Component, OnInit } from '@angular/core';
import { Form } from '../../form';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
//form = new Form;
emailid;
id;
name;
email;
password;
datas;
  constructor(private dataService: DataService, private router: Router,) {}

  async getEmployees(emailid) {   
    //console.log(emailid);
    await this.dataService.update(emailid).subscribe(data => {
      this.id = data[0]._id;
      this.name = data[0].name;
      this.email = data[0].email;
      this.password = data[0].password;

      
    });
  }
  	ngOnInit(): void {
      this.emailid = sessionStorage.getItem('emailid');
      this.getEmployees(this.emailid);
     //console.log(this.form.name);
}

onSubmit = function(update) {
   this.dataService.updatEmp(update).subscribe(data => {  alert(data.data);
        this.router.navigateByUrl('/showcreateuser');
   });
 }
}