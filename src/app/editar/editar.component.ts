import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../models/persona';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  persona: Persona;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private personaService: PersonaService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl('')
    });

    this.getPersona();
  }

  getPersona() {
    let id = this.route.snapshot.paramMap.get('id');
    this.personaService.getPersonaId(id)
      .subscribe(res => {
        this.persona = res;
        this.loadForm();
      },
      err => {
        console.log('Error ', err);
      })
  }

  loadForm() {
    this.form.controls.name.setValue(this.persona.name);
    this.form.controls.lastname.setValue(this.persona.lastname);
  }

  guardar(form) {
    let id = this.route.snapshot.paramMap.get('id');
    this.personaService.updatePersona(form.value, id)
      .subscribe(res => {
        alert('¡Persona editada con éxito!');
        this.router.navigate(['listar']);
      },
      err => {
        console.log("Error ", err);
      })
  }

}
