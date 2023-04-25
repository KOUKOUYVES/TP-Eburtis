import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './component/personne/liste/liste.component';
import { HomeComponent } from './component/home/home.component';
import { CreateComponent } from './component/personne/create/create.component';
import { EditComponent } from './component/personne/edit/edit.component';

const routes: Routes = [

  { path: 'home',
  component : HomeComponent

  },
 
  {
    path: 'liste-personnes',
    component: ListeComponent 
  },

  {
    path: 'create-personne',
    component: CreateComponent 
  },

  {
    path: 'edit-personne/:id',
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
