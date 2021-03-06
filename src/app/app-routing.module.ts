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
import { AuthGuardAdmin } from "./_helpers/auth.guardAdmin";
import { AuthGuardEditor } from "./_helpers/auth.guardEditor";
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-post',
    component: AddPostComponent,
    canActivate:[AuthGuard, AuthGuardEditor]
  },
  {
    path: 'edit-post',
    component: EditPostComponent,
    canActivate:[AuthGuard, AuthGuardEditor]
  },
  {
    path: 'category',
    component: CategoryListsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-category',
    component: AddCategoryComponent,
    canActivate:[AuthGuard, AuthGuardEditor]
  },
  {
    path: 'edit-category',
    component: EditCategoryComponent,
    canActivate:[AuthGuard, AuthGuardEditor]
  },
  {
    path: 'users',
    component: UserListsComponent,
    canActivate:[AuthGuard, AuthGuardAdmin]
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate:[AuthGuard, AuthGuardAdmin]
  },
  {
    path: 'edit-user',
    component: EditUserComponent,
    canActivate:[AuthGuard, AuthGuardAdmin]
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
