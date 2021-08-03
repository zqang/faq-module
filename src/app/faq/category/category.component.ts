import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  categories!: Category[];
  id!: number;
  subscription!: Subscription;

  constructor(
    private faqService: FaqService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.faqService.setCategories().subscribe();

    this.subscription = this.faqService.categoryChanged
    .subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      }
    )
    this.categories = this.faqService.getCategories();
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  onNewCategory(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
