import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../services/auth.guard";
import { FaqResolverService } from "../services/faq-resolver.service";
import { CategoryEditComponent } from "./category/category-edit/category-edit.component";
import { FaqComponent } from "./faq.component";
import { InitialComponent } from "./qna/initial/initial.component";
import { QnaComponent } from "./qna/qna.component";

const routes: Routes =[
    {path: '', component: FaqComponent, canActivate: [AuthGuard] , children: [
        {path: '', component: InitialComponent},
        {path: 'new', component: CategoryEditComponent},
        {path: ':id', component: QnaComponent, resolve: [FaqResolverService]},
        {path: ':id/edit', component: CategoryEditComponent,resolve: [FaqResolverService]},
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FaqRoutingModule{}