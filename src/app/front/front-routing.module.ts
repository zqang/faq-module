import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaqResolverService } from "../services/faq-resolver.service";
import { FrontCategoryComponent } from "./front-category/front-category.component";
import { FrontQuestionComponent } from "./front-question/front-question.component";

const routes: Routes = [
    {path: '', component: FrontCategoryComponent, children: [
        {path: ':id/questions', component: FrontQuestionComponent, resolve: [FaqResolverService]}
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FrontRoutingModule{}