import { Injectable } from '@angular/core';

import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Form } from './form';
@Injectable()

export class DataService {

	result:any;

  	constructor(private http: Http) { }
  	private headers = new Headers({'Content-Type': 'application/json'});

  	match(form : Form){     
    return this.http.post('http://127.0.0.1:8080/api/Match/', JSON.stringify(form), {headers: this.headers}) 
           .map((response: Response) =>response.json())              
  	} 

  	admin(form : Form){     
    return this.http.post('http://127.0.0.1:8080/api/MatchAdmin/', JSON.stringify(form), {headers: this.headers}) 
           .map((response: Response) =>response.json())              
  	}

  	saveUser(form : Form){     
    return this.http.post('http://127.0.0.1:8080/api/SaveUser/', JSON.stringify(form), {headers: this.headers}) 
           .map((response: Response) =>response.json())              
  	} 
  	
    createnewEmp(form : Form){     
    return this.http.post('http://127.0.0.1:8080/api/createnewEmp/', JSON.stringify(form), {headers: this.headers}) 
           .map((response: Response) =>response.json())              
    } 
  
  	GetEmpData(){       
    return this.http.get('http://127.0.0.1:8080/api/GetEmpData/')  
           .map((response: Response) => response.json())              
  	} 

    getEmployees(){       
    return this.http.get('http://127.0.0.1:8080/api/getEmployees/')  
           .map((response: Response) => response.json())              
    } 
    update(emailid){   
     return this.http.post('http://127.0.0.1:8080/api/getbyid/',{'emailid': emailid})  
            .map((response: Response) =>response.json())               
    }
    updatEmp(form ){   
     return this.http.post('http://127.0.0.1:8080/api/update/', JSON.stringify(form), {headers: this.headers})   
            .map((response: Response) =>response.json())               
    }
 	deleteUser(id){   
 	   return this.http.post('http://127.0.0.1:8080/api/deleteUser/',{'id': id})  
            .map((response: Response) =>response.json())               
  	} 

     private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

