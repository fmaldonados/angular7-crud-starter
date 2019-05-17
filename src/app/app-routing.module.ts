import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { CategoryListsComponent } from './components/category-lists/category-lists.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-post',
    component: AddPostComponent
  },
  {
    path: 'edit-post',
    component: EditPostComponent
  },
  {
    path: 'category',
    component: CategoryListsComponent
  },
  {
    path: 'add-category',
    component: AddCategoryComponent
  },
  {
    path: 'edit-category',
    component: EditCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
