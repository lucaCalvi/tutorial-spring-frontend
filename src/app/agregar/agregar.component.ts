import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { Router } from '@angular/router';
import { Persona } from '../models/persona';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private personaService: PersonaService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl('')
    });
  }

  guardar(form) {
    this.personaService.insertPersona(form.value)
      .subscribe(res => {
        alert('¡Persona guardada con éxito!');
        this.router.navigate(['listar']);
      },
      err => {
        console.log('Error ', err);
      })
  }

}
