import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,Validators } from "@angular/forms";
import { PersonneService } from 'src/app/services/personnes/personne.service';
import { DepartementService } from 'src/app/services/departements/departement.service';
import { Departement } from 'src/app/departement';
import { Personne } from 'src/app/personne';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  registerForm : any;
  submitted = false;
  vals = ''
  data= this.vals.split(',');
  departement!: any;
  personne !: Personne

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private personneService:PersonneService,
    private departmentService: DepartementService,

    ) { }

  ngOnInit() {
    this.getListeDepartement()
      this.registerForm = this.formBuilder.group({
          nom: ['', Validators.required],
          prenom: ['', Validators.required],
          age: ['', Validators.required],
          departement: ['', Validators.required],

      });
  }
  // getter pratique pour un accès facile aux champs du formulaire
  get f() { 
    return this.registerForm.controls; 
    }
    onSubmit(){
      ///retourne le formulaire s'il est invalid
      if (this.registerForm.invalid) {
                return;
            }
      // c'est ici q'uon appel la methode qui se trouve dans notre service
      this.personneService.createPersonne(this.registerForm.value).subscribe(
        (data:any)=>{
          console.log(data.value);
           this.router.navigate(['/liste-personnes']);  
        },  
       error => {});
  }

  ////vider le formulaire apres enregistrement
  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

  getListeDepartement() {
    this.departmentService.getAllDepartements().subscribe({
      next: (reponse: any) => {
        this.departement = reponse;
        console.log(this.departement.value);
        
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

}
