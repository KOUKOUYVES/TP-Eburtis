import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personne } from 'src/app/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http :HttpClient ) { }
  baseUrl: string = 'http://localhost:8080/';

  //methode permettant d'afficher toutes les personnes
        getAllPersonne() {
          return this.http.get(this.baseUrl + 'getAllPersonnes');
        }
  //methode permettant d'ajouter une personne dans la base de donnée
        createPersonne(personne:any) {
          return this.http.post<any>(this.baseUrl + 'addPersonne', personne);
        } 
  //methode permettant de modifier une personne dans la base de donnée
        updatePersonne(id:number, personne:any) {
          return this.http.put<Personne>(this.baseUrl +'updatePersonneById/'+ id, personne);
        }
  //methode permettant d'afficher une personne dans la base de donnée a travers son identifiant
        getFindIdPersonne(id:any){
          console.log(id);
          return this.http.get(this.baseUrl +'getPersonneById/'+ id)
        }
  //methode permettant de supprimer une personne dans la base de donnée
        deletePersonne(id:number) {
          console.log(id);
          return this.http.delete(this.baseUrl+'personneDelete/'+ id);  
        }
}
