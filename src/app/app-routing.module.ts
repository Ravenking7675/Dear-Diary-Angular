import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDiaryComponent } from './components/list-diary/list-diary.component';
import { AddDiaryComponent } from './components/add-diary/add-diary.component';


const routes: Routes = [
  {path: 'diary', component: ListDiaryComponent},
  {path: 'addDiary', component: AddDiaryComponent},
  {path: 'editDiary/:id', component: AddDiaryComponent},
  {path: '', redirectTo: '/diary', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
