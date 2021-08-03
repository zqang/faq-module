import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FrontCategoryComponent } from "./front-category/front-category.component";
import { FrontQuestionComponent } from "./front-question/front-question.component";
import { FrontRoutingModule } from "./front-routing.module";

@NgModule({
    declarations: [
        FrontCategoryComponent,
        FrontQuestionComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        FrontRoutingModule
    ]
})

export class FrontModule{}