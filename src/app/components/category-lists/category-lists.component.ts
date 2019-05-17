import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CategoryService } from 'src/app/category.service';
import { Category } from 'src/app/models/Category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-lists',
  templateUrl: './category-lists.component.html',
  styleUrls: ['./category-lists.component.scss']
})
export class CategoryListsComponent implements OnInit {

  categories: Category[];

  constructor(
    private data: DataService,
    private categoryService:CategoryService,
    private router: Router
    ) {  }

  ngOnInit() {
    this.data.changeTitle("Categories");
    this.categoryService.getCategories().subscribe( (categories: Category[]) => {
      this.categories = categories;
    });
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
