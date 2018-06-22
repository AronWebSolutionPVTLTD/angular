import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  email : string;
  ngOnInit() {
  	this.email = sessionStorage.getItem('email');
  }
  logout(){
  	sessionStorage.removeItem('email');
    sessionStorage.clear();
    this.router.navigate(['/admin']);
  }
}
