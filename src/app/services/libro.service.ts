import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  URL_API = 'http://localhost:8080/api/libros';

  constructor(private httpClient: HttpClient) { }

  getLibrosPersona(idPersona) {
    return this.httpClient.get<Libro[]>(this.URL_API + `/persona/${idPersona}`);
  }

  insertLibro(libro) {
    return this.httpClient.post<Libro>(this.URL_API, libro);
  }

  getLibroId(id) {
    return this.httpClient.get<Libro>(this.URL_API + `/${id}`);
  }

  updateLibro(libro, id) {
    return this.httpClient.put<Libro>(this.URL_API + `/${id}`, libro);
  }

  deleteLibro(id) {
    return this.httpClient.delete<Libro>(this.URL_API + `/${id}`);
  }
}
