import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAdditionComponent } from './book-addition/book-addition.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookReportComponent } from './book-report/book-report.component';
import { ErrorComponent } from './error/error.component';
import { BookUpdateComponent } from './book-update/book-update.component';

const routes: Routes = [
  {path:'', redirectTo:'/BOOK-ADD',pathMatch:'full'},
  {path: 'BOOK-ADD', component:BookAdditionComponent},
  { path: 'BOOK-SHOW/:bookId', component: BookReportComponent},
  { path: 'BOOK-LIST', component: BookListComponent},
  { path: 'BOOK-MOD/:bookId', component: BookUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
