import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { CategoryService } from 'src/app/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private data: DataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private categoryService: CategoryService,
    ) { }

  ngOnInit() {
    this.data.changeTitle("Add Category");

    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.addForm.value)
    
    if(this.addForm.valid){
      this.categoryService.addCategory(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/category']);
      });

    }
  }

  get f() { return this.addForm.controls; }

}
