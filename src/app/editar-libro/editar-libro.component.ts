import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  libro: Libro;
  form: FormGroup;
  idPersona: number;

  constructor(private route: ActivatedRoute, private libroService: LibroService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      titulo: new FormControl(''),
      genero: new FormControl(''),
      descripcion: new FormControl('')
    });

    this.getLibro();
  }

  getLibro() {
    let id = this.route.snapshot.paramMap.get('id');
    this.libroService.getLibroId(id)
      .subscribe(res => {
        this.libro = res;
        this.idPersona = this.libro.idPersona;
        this.loadForm();
      },
      err => {
        console.log('Error ', err);
      })
  }

  loadForm() {
    this.form.controls.titulo.setValue(this.libro.titulo);
    this.form.controls.genero.setValue(this.libro.genero);
    this.form.controls.descripcion.setValue(this.libro.descripcion);
  }

  guardar(form) {
    let id = this.route.snapshot.paramMap.get('id');
    this.libro.idPersona = this.idPersona;
    this.libro.titulo = this.form.controls.titulo.value;
    this.libro.genero = this.form.controls.genero.value;
    this.libro.descripcion = this.form.controls.descripcion.value;
    this.libroService.updateLibro(this.libro, id)
      .subscribe(res => {
        alert('Libro editado con éxito!');
        this.router.navigate([`listar-libros/${this.idPersona}`]);
      },
      err => {
        console.log("Error ", err);
      })
  }

}
