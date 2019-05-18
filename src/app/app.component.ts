import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { AuthenticationService } from "./authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:string;
  currentUser:any;
  
  constructor(
    private authenticationService: AuthenticationService, 
    private data: DataService
    ) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {
    this.data.currentTitle.subscribe(title => this.title = title)
    
  }

}
