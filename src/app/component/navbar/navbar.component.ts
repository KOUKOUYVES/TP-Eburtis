import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    items !: MenuItem[];
    activeItem !: MenuItem;
    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home',routerLink :['/home'] },
            { label: 'Personne', icon: 'pi pi-fw pi-user',routerLink :['/liste-personnes']},
        ];

        this.activeItem = this.items[0];
    }
}