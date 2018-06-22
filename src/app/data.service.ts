import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/toPromise';
import { Form } from './form';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  private headers = new Headers({'Content-Type': 'application/json'});

   constructor(private http: Http, private router: Router) { }

  dashboard(form: Form): Promise<Form> {
    var invalide : any;
    return this.http.post('http://127.0.0.1:3000/dashboard', JSON.stringify(form), {headers: this.headers})
      .toPromise()
      .then(res => { if(res.json() == '1'){
       return invalide ="Inserted Successfully";
      }
      
      else{
       return invalide ="Not Inserted";
      }
      
      })
      .catch(this.handleError);
  }

  create(form: Form): Promise<Form> {
    var invalide : any = "Not Created";
    return this.http.post('http://127.0.0.1:3000/create', JSON.stringify(form), {headers: this.headers})
      .toPromise()                                                  
      .then(res => {
      if(res.json() =='1'){
        this.router.navigate(['/showcreateuser']);
      }
      
      else{ return invalide; } 
      })
      .catch(this.handleError);
  } 

  match(form: Form): Promise<Form> {
    var invalide : any = "Invalide Username or Password";
    return this.http.post('http://127.0.0.1:3000/login', JSON.stringify(form), {headers: this.headers})
      .toPromise()                                                  
      .then(res => {
      if(res.json()=="1"){
        this.router.navigate(['/dashboard']);
      }
      else{
        return invalide ;
      }
})
      .catch(this.handleError);  
  }
  admin(form: Form): Promise<Form> {
   var invalide : any = "Invalide Username or Password";
    return this.http.post('http://127.0.0.1:3000/admin', JSON.stringify(form), {headers: this.headers})
     .toPromise()                                                  
      .then(res => { if(res.json()=="1"){
        this.router.navigate(['/showdata']);
      }
      
      else{ return invalide;
       }
})
      .catch(this.handleError);
  }

  delete(formid: string): Promise<Form[]> {
    const url = `${'http://127.0.0.1:3000/delete'}/${formid}`;
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getdata(): Promise<Form[]> {
    return this.http.get('http://127.0.0.1:3000/get')
      .toPromise()                                                  
      .then(response => response.json() as Form[])
      .catch(this.handleError);
  } 
   
    showdashboard(email: string): Promise<Form[]> {
    const url = `${'http://127.0.0.1:3000/showdashboard'}/${email}`;
    console.log(url);
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Form)
      .catch(this.handleError);
  }
  update(formid: string): Promise<Form[]> {
    const url = `${'http://127.0.0.1:3000/update'}/${formid}`;
    return this.http.post(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getCustomersByformid(formid: string): Promise<Form[]> {
    const url = `findbylastname/${formid}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Form)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}






 