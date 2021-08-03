import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/category', pathMatch: 'full' },
  {path: 'faqs', loadChildren: () => 
  import('./faq/faq.module').then(m => m.FaqModule)},
  {path: 'category', loadChildren: () => 
  import('./front/front.module').then(m => m.FrontModule)},
  {path: 'auth', loadChildren: () => 
  import('./auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
