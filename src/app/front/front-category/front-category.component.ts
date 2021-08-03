import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-front-category',
  templateUrl: './front-category.component.html',
  styleUrls: ['./front-category.component.css']
})
export class FrontCategoryComponent implements OnInit, OnDestroy {

  categories!: Category[];
  subscription!: Subscription;

  constructor(
    private faqService: FaqService,
    ) { }

  ngOnInit(): void {
    this.faqService.setCategories().subscribe();
    this.subscription = this.faqService.categoryChanged
    .subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
