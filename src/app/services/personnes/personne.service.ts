import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personne } from 'src/app/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http :HttpClient ) { }
  baseUrl: string = 'http://localhost:8080/';
  
        getAllPersonne() {
          return this.http.get(this.baseUrl + 'getAllPersonnes');
        }

        createPersonne(personne:any) {
          return this.http.post<any>(this.baseUrl + 'addPersonne', personne);
        } 

        updatePersonne(id:number, personne:any) {
          return this.http.put<Personne>(this.baseUrl +'updatePersonneById/'+ id, personne);
        }

        getFindIdPersonne(id:any){
          console.log(id);
          return this.http.get(this.baseUrl +'getPersonneById/'+ id)
        }

        deletePersonne(id:number) {
          console.log(id);
          return this.http.delete(this.baseUrl+'personneDelete/'+ id);  
        }

  
}
