import { Component, OnInit,Input } from '@angular/core';
import { Form } from '../form';
import { DataService } from '../data.service';;
import 'rxjs/add/operator/toPromise';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/observable/from';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  datas;
	form = new Form;
  	constructor(private dataService: DataService, private router: Router) { }

  	ngOnInit() {
  	}
 
 private save(): void {
     this.dataService.match(this.form).subscribe(data =>  {
      if(data.data == "Matching"){
        this.router.navigate(['/registration']);
       sessionStorage.setItem('email', this.form.email);
      }
      else{
        this.datas = data.data;
        console.log(data.data);
      }
    });    
 }

 onSubmit(form) {
     this.save();
 }  
 }