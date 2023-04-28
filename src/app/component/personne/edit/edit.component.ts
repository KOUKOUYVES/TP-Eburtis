import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/departement';
import { Personne } from 'src/app/personne';
import { DepartementService } from 'src/app/services/departements/departement.service';
import { PersonneService } from 'src/app/services/personnes/personne.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id!: number;
  personne!: Personne;
  editFormPersonne!: FormGroup;
  submitted = false;
  departement!: Departement[];

     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private personneService:PersonneService,
    private route : ActivatedRoute,
    private departmentService: DepartementService
  ) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.recupereUserById()
    this.getListeDepartement()
    this.editFormPersonne = new FormGroup({
      nom:new FormControl('', [Validators.required]),
      prenom:new FormControl('', Validators.required),
      age:new FormControl('', Validators.required),
    });  
  }
  //recuperer une personne a travers son id 
  recupereUserById(){
    this.id = this.route.snapshot.params['id'];
    this.personneService.getFindIdPersonne(this.id).subscribe((data: any)=>{
    this.personne = data;
  });
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  onEdit(){
    console.log(this.editFormPersonne.value);
    this.personneService.updatePersonne(this.id,this.personne).subscribe((res:any) => {
         console.log('Personne updated successfully!');
          this.router.navigate(['/liste-personnes']);
    })
  }
  onReset(){
    this.submitted = false;
    this.editFormPersonne.reset();
  }   
  
  getListeDepartement() {
    this.departmentService.getAllDepartements().subscribe({
      next: (reponse: any) => {
        this.departement = reponse;
        console.log(this.departement);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
