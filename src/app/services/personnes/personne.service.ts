import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http :HttpClient) { }
  baseUrl: string = 'http://localhost:8080/';

        getData() {
          const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
          return this.http.get('http://localhost:8080/', { headers });
        }

        getAllPersonne() {
          return this.http.get(this.baseUrl + 'getPersonnesAll');
        }

        createPersonne(personne:any) {
          return this.http.post(this.baseUrl + 'add-personne', personne);
        } 

        updatePersonne(id: number) {
          return this.http.put(this.baseUrl +'personneUpdate/', id );
        }

        deletePersonne(id:number) {
          console.log(id);
          return this.http.delete(this.baseUrl+'deletePersonne/'+ id);  
        }  
  
}
