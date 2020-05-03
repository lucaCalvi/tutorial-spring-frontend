import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroService } from '../services/libro.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {

  libros: Libro[];
  idPersona = this.route.snapshot.paramMap.get('idPersona');

  constructor(private libroService: LibroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.libroService.getLibrosPersona(this.idPersona)
      .subscribe(res => {
        this.libros = res;
      },
      err => {
        console.log('Error ', err);
      })
  }

  editar(libro) {
    this.router.navigate([`editar-libro/${libro.id}`]);
  }

  eliminar(libro, i) {
    this.libroService.deleteLibro(libro.id)
      .subscribe(res => {
        alert('¡Libro eliminado con éxito!');
        this.libros.splice(i, 1);
        this.router.navigate([`listar-libros/${this.idPersona}`]);
      },
      err => {
        console.log('Error ', err);
      })
  }

  agregar() {
    this.router.navigate([`agregar-libro/${this.idPersona}`]);
  }

}
