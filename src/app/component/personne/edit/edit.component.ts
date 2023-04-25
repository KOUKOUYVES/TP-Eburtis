import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/personne';
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

     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private personneService:PersonneService,
    private route : ActivatedRoute
  ) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.recupereUserById()
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
  get f(){
    return this.editFormPersonne.controls;
  }
     
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
}
