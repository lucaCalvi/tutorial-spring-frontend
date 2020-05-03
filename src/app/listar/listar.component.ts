import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { Router } from '@angular/router';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[];

  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit() {
    this.personaService.getPersonas()
      .subscribe(res => {
        this.personas = res;
      },
      err => {
        console.log('Error ', err);
      })
  }

  editar(persona) {
    this.router.navigate([`editar/${persona.id}`]);
  }

  eliminar(persona, i) {
    this.personaService.deletePersona(persona.id)
      .subscribe(res => {
        alert('¡Persona eliminada con éxito!');
        this.personas.splice(i, 1);
        this.router.navigate(['listar']);
      },
      err => {
        console.log('Error ', err);
      })
  }

  listarLibros(idPersona) {
    this.router.navigate([`listar-libros/${idPersona}`]);
  }

}
