personne : Personne = new Personne();
  submitted = false;
      constructor(
        private router : Router,
        private personneService : PersonneService
      ){}
  ngOnInit(): void {}

  newPersonne(): void {
    this.submitted = false;
    this.personne = new Personne();
  }

  savePersonne() {
    this.personneService
    .createPersonne(this.personne).subscribe(data => {
      console.log(data)
      this.personne = new Personne();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.savePersonne();    
  }

  gotoList() {
    this.router.navigate(['/liste-personnes']);
  }