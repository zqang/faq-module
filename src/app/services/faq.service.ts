import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category } from '../models/category';
import { Qna } from '../models/qna';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  categoryChanged = new Subject<Category[]>();
  startedEditing = new Subject<number>();
  
  private categories!: Category[];
  constructor(private http: HttpClient) { }

  setCategories(){
    return this.http.get<Category[]>(
      'http://localhost:8080/category/categories')
      .pipe(
        tap( categories => {
        console.log('set have called')
        this.categories = categories;
        this.categoryChanged.next(this.categories);
        })
      )
  }

  getCategories(){
    console.log(this.categories);
    return this.categories;
  }

  getCategory(index: number){
    
    return this.categories[index];
  }

  addCategory(category: Category){
    return this.http.post<Category>('http://localhost:8080/category/add_categories', category)
    .subscribe(res => {
      this.categories.push(res);
      this.categoryChanged.next(this.categories.slice());
      console.log(this.categories)
    })
  }

  updateCategory(index: number, newCategory: Category){
    return this.http.put<Category>('http://localhost:8080/category/category/'+ newCategory.categoryId, newCategory)
    .subscribe(() => {
      this.categories[index] = newCategory
      this.categoryChanged.next(this.categories.slice());
    })
  }

  deleteCategory(id: number){

    return this.http.delete('http://localhost:8080/category/category/'+ id)
    .subscribe(() => {
      
      let index = this.categories.findIndex(category => category.categoryId === id);
      this.categories.splice(index, 1);
      console.log(this.categories);
      
      this.categoryChanged.next(this.categories.slice());
    })
  }

  updateQna(categoryId: number, index: number,  newQna: Qna){
    this.categories[categoryId].qnaList[index] = newQna;
  }

  deleteQna(categoryId: number, index: number){
    this.categories[categoryId].qnaList.splice(index,1);
  }

  addQna(newQna: Qna, index: number){
    this.categories[index].qnaList.push(newQna);
  }

  getQuestion(index: number, categoryId: number){
    return this.categories[categoryId].qnaList[index];
  }



  
}
