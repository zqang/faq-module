import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
    declarations: [AuthComponent,LoadingSpinnerComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component:AuthComponent}])
    ],
})

export class AuthModule{}