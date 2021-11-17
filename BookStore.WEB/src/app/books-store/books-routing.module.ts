import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './container';
import { BookFormComponent } from './container/book-form';

const routes: Routes = [
    {
        path: '',
        component: BooksComponent,
    },
    {
      path: ':id',
      component: BookFormComponent,
     
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }