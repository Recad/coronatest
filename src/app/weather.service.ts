import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(protected http: HttpClient) { }


  getCasosDias() {
    return this.http.get<any[]>('http://localhost:5000/casos/dias');
  }

  getCasosSexo() {
    return this.http.get<any[]>('http://localhost:5000/casos/sexo');
  }

  getCasosCiudades() {
    return this.http.get<any[]>('http://localhost:5000/casos/ciudades');
  }

  SetCaso(ciudad,sexo,estado){
    //return this.http.post('http://localhost:5000/casos/nuevo/'+ciudad+, body, options )

    return this.http.post<any[]>('http://localhost:5000/casos/nuevo', { 'ciudad': ciudad ,'sexo':sexo,'estado':estado});
  }
}
