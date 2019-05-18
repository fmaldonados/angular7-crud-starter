import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from 'src/app/data.service';
import { UserService } from 'src/app/user.service';
import { Router,ActivatedRoute, } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  roles: String[];
  editForm: FormGroup;
  submitted: boolean = false;
  userId:string;
  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.data.changeTitle("Edit User")
    this.roles = ["Admin","Editor","Viewer"];

    this.editForm = this.formBuilder.group({
      id: [],
      username: [],
      password: [],
      firstName: [],
      lastName: [],
      role: []
    });

    this.route.queryParams
      .subscribe(params => {
        let userId = params['userId'];
        if (!userId) {
          this.router.navigate(['/users']);
        }
        this.userId = userId;
        this.userService.getUser(userId).subscribe( (user: User) => {
          
          this.editForm.patchValue(user);
        })
      });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.editForm.valid){
      this.userService.editUser(this.editForm.value)
      .subscribe( data => {
        this.router.navigate(['users']);
      });
    }
  }

  get f() { return this.editForm.controls; }
}
