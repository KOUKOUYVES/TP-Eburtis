import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './component/personne/liste/liste.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [

  { path: '',
  component : HomeComponent

  },
  {
    path: 'liste-personnes',
    component: ListeComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
