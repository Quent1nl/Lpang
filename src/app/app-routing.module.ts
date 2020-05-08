import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { BurgerComponent } from './burger/burger.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path: '', component: BurgerComponent},
  {path: 'burger/:id', component: BurgerDetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
