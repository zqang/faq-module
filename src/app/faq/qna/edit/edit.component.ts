import { Component,OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Qna } from 'src/app/models/qna';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  @ViewChild('f') qnaForm!: NgForm;
  subscription!: Subscription;
  editMode = false;
  editedQnaIndex!: number;
  editedQna!: Qna;

  id!: number;
  categories!: Category[];
  qna!: Qna;

  constructor(private route: ActivatedRoute, private faqService: FaqService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    )

    this.faqService.categoryChanged
    .subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      }
    )


    this.subscription =this.faqService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedQnaIndex = index;
        this.editMode = true;
        this.editedQna = this.faqService.getQuestion(index, this.id);
        this.qnaForm.setValue({
          question: this.editedQna.question,
          answer: this.editedQna.answer
        })
      }
    );

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newQuestion = new Qna(0,value.question, value.answer);
    if (this.editMode){
      this.faqService.updateQna(this.id ,this.editedQnaIndex, newQuestion)
    } else {
      this.faqService.addQna(newQuestion, this.id);
    }
    this.editMode = false;
    form.reset()
  }

  onClear(){
    this.qnaForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.faqService.deleteQna(this.id, this.editedQnaIndex);
    this.onClear();
    
  }

}
