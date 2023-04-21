import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './component/personne/liste/liste.component';
import { HomeComponent } from './component/home/home.component';
import { CreateComponent } from './component/personne/create/create.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
