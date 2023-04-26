import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { MenubarModule } from 'primeng/menubar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CreateComponent } from './component/personne/create/create.component';
import { EditComponent } from './component/personne/edit/edit.component';
import { ListeComponent } from './component/personne/liste/liste.component';
import {HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonneComponent } from './component/personne/personne.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    ListeComponent,
    PersonneComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TabMenuModule,
    InputTextModule,
    TreeTableModule,
    ButtonModule,
    TableModule,
    CardModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
