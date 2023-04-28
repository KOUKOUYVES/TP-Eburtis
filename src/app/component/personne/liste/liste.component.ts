import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FilterMatchMode, MenuItem, PrimeNGConfig} from 'primeng/api';
import { Departement } from 'src/app/departement';
import { DepartementService } from 'src/app/services/departements/departement.service';
import { PersonneService } from 'src/app/services/personnes/personne.service';
import { Personne } from 'src/app/personne';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit  {
  
    personnes!: Personne[];
    item!: MenuItem[];
    departement!: Departement;
    cols: any[] = [];
    @ViewChild('myTab') table!: Table;

    constructor(
      private personneServices: PersonneService,
      private departmentServices: DepartementService,
      private config : PrimeNGConfig

      ) {}

    ngOnInit() {
        this.getListePersonnes();
        this.trieParPersonne()

        this.config.filterMatchModeOptions = {
          text: [],
          numeric: [
              FilterMatchMode.LESS_THAN,
              FilterMatchMode.GREATER_THAN,
          ],
          date: []
      }
    }
//fonction pour fair un trie dans le tableau
    trieParPersonne(){
      this.cols = [
          { field: "nom", header: "First Name" },
          { field: "age", header: "Age" },

        ];
    }

    

    //Cette fonction permet de récupérer la liste des departements depuis le service
  getListeDepartement() {
    this.departmentServices.getAllDepartements().subscribe({
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
      this.personneServices.getAllPersonne().subscribe(
        (result:any)=>{
          console.log(result)
          this.personnes = result;          
        }
      )
    }
// Cette fonction permet de supprimer une personne
    deletePersonne(id:any){
      this.personneServices.deletePersonne(id).subscribe(data=>{
        window.location.reload()
      })
    }
}
