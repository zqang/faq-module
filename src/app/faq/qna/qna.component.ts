import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Qna } from 'src/app/models/qna';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.css']
})
export class QnaComponent implements OnInit, OnDestroy{

  category!: Category;
  id!: number;
  qnaList!: Qna[];
  subscription!: Subscription;
  categories!: Category[];
  
  constructor(private route: ActivatedRoute,
    private faqService: FaqService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.faqService.categoryChanged
    .subscribe(categories => {
      this.categories = categories;
    })

    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.category = this.faqService.getCategory(this.id)
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditQuestion(index: number){
    this.faqService.startedEditing.next(index);
  }
  
  onEditCategory(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteCategory(){
    this.faqService.deleteCategory(this.category.categoryId);
    this.router.navigate(['/faqs'])
  }
}
