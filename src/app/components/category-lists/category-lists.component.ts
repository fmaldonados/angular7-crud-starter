import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CategoryService } from 'src/app/category.service';
import { Category } from 'src/app/models/Category';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../authentication.service";

@Component({
  selector: 'app-category-lists',
  templateUrl: './category-lists.component.html',
  styleUrls: ['./category-lists.component.scss']
})
export class CategoryListsComponent implements OnInit {

  categories: Category[];
  currentUser:any;
  isViewer:boolean;

  constructor(
    private data: DataService,
    private categoryService:CategoryService,
    private router: Router,
    private authenticationService: AuthenticationService, 
    ) {  
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {
    this.data.changeTitle("Categories");
    this.categoryService.getCategories().subscribe( (categories: Category[]) => {
      this.categories = categories;
    });
    this.isViewer = !(this.currentUser.role != "Editor" && this.currentUser.role != "Admin")
  }

  editCategory(categoryId){
    this.router.navigate(['/edit-category'], { queryParams: { categoryId: categoryId } });
  }

  deleteCategory(categoryId){
    this.categoryService.deleteCategory(categoryId).subscribe( () => {
      const categoryIndex = this.categories.findIndex( (category) => category.id === categoryId);
      this.categories.splice(categoryIndex, 1);
    });
  }
}
