import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL_API = 'http://localhost:8080/api/personas';

  constructor(private httpClient: HttpClient) { }

  getPersonas() {
    return this.httpClient.get<Persona[]>(this.URL_API);
  }

  insertPersona(persona) {
    return this.httpClient.post<Persona>(this.URL_API, persona);
  }

  getPersonaId(id) {
    return this.httpClient.get<Persona>(this.URL_API + `/${id}`);
  }

  updatePersona(persona, id) {
    return this.httpClient.put<Persona>(this.URL_API + `/${id}`, persona);
  }

  deletePersona(id) {
    return this.httpClient.delete<Persona>(this.URL_API + `/${id}`);
  }
}
