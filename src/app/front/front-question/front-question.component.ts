import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-front-question',
  templateUrl: './front-question.component.html',
  styleUrls: ['./front-question.component.css']
})
export class FrontQuestionComponent implements OnInit, OnDestroy {

  id!: number;
  category!: Category;
  categories!: Category[];
  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private faqService: FaqService
    
  ) { }

  ngOnInit(): void {

    this.subscription = this.faqService.categoryChanged
    .subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      }
    )


    this.route.params
    .subscribe((params: Params) => {
      this.id = +params['id'];
      this.category = this.faqService.getCategory(this.id);
    })
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
