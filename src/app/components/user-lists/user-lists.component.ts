import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent implements OnInit {

  users: User[];

  constructor(
    private data: DataService,
    private userService:UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.data.changeTitle("Users");
    this.userService.getUsers().subscribe( (users: User[]) => {
      this.users = users;
    });
  }

  editCategory(userId){
    this.router.navigate(['/edit-user'], { queryParams: { userId: userId } });
  }

  deleteCategory(userId){
    this.userService.deleteUser(userId).subscribe( () => {
      const userIndex = this.users.findIndex( (category) => category.id === userId);
      this.users.splice(userIndex, 1);
    });
  }

}
