import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LibroService } from '../services/libro.service';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent implements OnInit {

  form: FormGroup;
  idPersona = this.route.snapshot.paramMap.get('idPersona');

  constructor(private router: Router, private libroService: LibroService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      titulo: new FormControl(''),
      genero: new FormControl(''),
      descripcion: new FormControl('')
    });
  }

  guardar(form) {
    var libro = new Libro();
    libro.idPersona = parseInt(this.idPersona);
    libro.titulo = this.form.controls.titulo.value;
    libro.genero = this.form.controls.genero.value;
    libro.descripcion = this.form.controls.descripcion.value;
    this.libroService.insertLibro(libro)
      .subscribe(res => {
        alert('Libro guardado con éxito!');
        this.router.navigate([`listar-libros/${this.idPersona}`]);
      },
      err => {
        console.log('Error ', err);
      })
  }

}
