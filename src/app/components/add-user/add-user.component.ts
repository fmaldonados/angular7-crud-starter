import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from 'src/app/data.service';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  roles: String[];
  addForm: FormGroup;
  submitted: boolean = false;
  constructor(
    private data: DataService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.data.changeTitle("Add User")

    this.roles = ["Admin","Editor","Viewer"];

    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.addForm.value)
    
    if(this.addForm.valid){
      this.userService.addUser(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['/users']);
      });
    }
  }

  get f() { return this.addForm.controls; }
}
