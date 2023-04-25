import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Departement } from 'src/app/departement';
import { DepartementService } from 'src/app/services/departements/departement.service';
import { PersonneService } from 'src/app/services/personnes/personne.service';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit  {
  
    personnes!: any[];
    item!: MenuItem[];
    @Input() searchText: any;
    departement!: Departement;

    constructor(
      private personneService: PersonneService,
      private departmentService: DepartementService,
      ) {}

    ngOnInit() {
        this.getListePersonnes();
    }

    //Cette fonction permet de récupérer la liste des departements depuis le service
  getListeDepartement() {
    this.departmentService.getAllDepartements().subscribe({
      next: (reponse: any) => {
        this.departement = reponse;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

//  Cette fonction permet de récupérer la liste des personnes depuis le service
    getListePersonnes(){
      this.personneService.getAllPersonne().subscribe(
        (result:any)=>{
          console.log(result)
          this.personnes = result;          
        }
      )
    }
// Cette fonction permet de supprimer une personne
    deletePersonne(id:any){
      this.personneService.deletePersonne(id).subscribe(data=>{
        window.location.reload()
      })
    }
}
