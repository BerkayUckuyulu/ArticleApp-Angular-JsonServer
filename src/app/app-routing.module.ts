import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './create-article/create-article.component';
import { HomeComponent } from './home/home.component';
import { ViewArticleComponent } from './view-article/view-article.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'create',
    component: CreateArticleComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'articles/:articleid',
    component: ViewArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
