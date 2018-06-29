import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }
  email : string;
  ngOnInit() {
  	this.email = sessionStorage.getItem('email');
    if (!this.email) {
        this.router.navigate(['/admin']);
      }
   /* isLoggedIn() {
      return this.authService.isLoggedIn();
    }*/
  }
 
  logout(){
  	sessionStorage.removeItem('email');
    sessionStorage.clear();
    this.router.navigate(['/admin']);
  }
}
