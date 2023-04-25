import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http :HttpClient) { }
  baseUrl: string = 'http://localhost:8080/getAllDepartements';

//methode permettant d'afficher tous les departements
  getAllDepartements() {
    return this.http.get(this.baseUrl);
  }
}
