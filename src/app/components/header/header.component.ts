import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title:string;
  currentUser:any;
  isAdmin:boolean;
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService, 
  ) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.isAdmin = this.currentUser.role == "Admin"
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
