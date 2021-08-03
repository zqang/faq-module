import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";


import { CategoryEditComponent } from "./category/category-edit/category-edit.component";
import { CategoryComponent } from "./category/category.component";
import { FaqRoutingModule } from "./faq-routing.module";
import { FaqComponent } from "./faq.component";
import { EditComponent } from "./qna/edit/edit.component";
import { InitialComponent } from "./qna/initial/initial.component";
import { QnaComponent } from "./qna/qna.component";

@NgModule({
    declarations: [
        FaqComponent,
        CategoryComponent,
        QnaComponent,
        EditComponent,
        InitialComponent,
        CategoryEditComponent,
    ],
    imports: [
        RouterModule, 
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule,
        FaqRoutingModule
    ], 
})
export class FaqModule{}