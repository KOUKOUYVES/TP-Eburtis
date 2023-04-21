import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PersonneService } from 'src/app/services/personnes/personne.service';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit  {
    personnes!: any[];
    item!: MenuItem[];

    constructor(private personneService: PersonneService) {}

    ngOnInit() {
        this.getListePersonnes();
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
