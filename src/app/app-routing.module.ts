import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { CategoryListsComponent } from './components/category-lists/category-lists.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { UserListsComponent } from './components/user-lists/user-lists.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from "./_helpers/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-post',
    component: AddPostComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'edit-post',
    component: EditPostComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'category',
    component: CategoryListsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-category',
    component: AddCategoryComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'edit-category',
    component: EditCategoryComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'users',
    component: UserListsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
