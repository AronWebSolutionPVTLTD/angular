import { Component, OnInit } from '@angular/core';
import { Form } from '../../form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  rForm: FormGroup;
  post:any;                
  description:string = '';
  name:string = '';

  constructor(private fb: FormBuilder) { 

    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.required],
      'validate' : ''
    });

  }
 addPost(post) {
 	/*this.description = post.description;
    this.name = post.name;*/
  }
  	ngOnInit(): void {
}

}
