import { Component,OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit{

  id!: number;
  editMode = false;
  categoryForm!: FormGroup;
  category!: Category;

  constructor(private route: ActivatedRoute,
    private faqService: FaqService,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  get controls() { // a getter!
    return (<FormArray>this.categoryForm.get('qnaList')).controls;
  }

  onSubmit(){
    console.log(this.category)
    
    if(this.editMode){
      const newCategory = new Category(
        this.categoryForm.value[this.category.categoryId],
        this.categoryForm.value['name'],
        this.categoryForm.value['qnaList']
      )
      this.faqService.updateCategory(this.id, newCategory);
    } else {
      console.log(this.categoryForm.value)
      this.faqService.addCategory(this.categoryForm.value);
    }
    this.onCancel();
  }

  onAddQna(){
    (<FormArray>this.categoryForm.get('qnaList')).push(
      new FormGroup({
        'question': new FormControl(null, Validators.required),
        'answer': new FormControl(null, Validators.required)
      })
    )
  }

  onDeleteQna(index: number){
    (<FormArray>this.categoryForm.get('qnaList')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  private initForm(){
    let categoryName = ''
    let qnaList = new FormArray([]);

    if(this.editMode){
      console.log('edit mode')
      this.category = this.faqService.getCategory(this.id);
      console.log(this.category)
      categoryName = this.category.name
      if (this.category['qnaList']){
        for (let qna of this.category.qnaList){
          qnaList.push(
            new FormGroup({
              'question': new FormControl(qna.question, Validators.required),
              'answer': new FormControl(qna.answer, Validators.required)
            })
          )
        }
      }
    }
    this.categoryForm = new FormGroup({
      'name': new FormControl(categoryName, Validators.required),
      'qnaList': qnaList
    })
  }

}
