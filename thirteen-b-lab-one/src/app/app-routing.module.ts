import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFilterComponent } from './book-filter/book-filter.component';

const routes: Routes = [ { path: '',       component:  BookFilterComponent},
{path: '**', redirectTo:'PageNotFoundComponent'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
