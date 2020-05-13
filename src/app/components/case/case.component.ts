import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule,Validators} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Caso } from './caso.model';
import { WeatherService } from '../../weather.service'


@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  
  casos = new FormGroup({
    ciudad : new FormControl('', [
      Validators.required
    ]),
    Sexo : new FormControl('', [
      Validators.required
    ]),
    estado : new FormControl('', [
      Validators.required
    ]),
  });
  selected = '';
  mensaje = '';
  
  constructor(private WeatherService: WeatherService) { }

  ngOnInit(): void {
  
  }

  guardar(){
    console.log(this.casos.value.Sexo)
    this.WeatherService.SetCaso(this.casos.value.ciudad,this.casos.value.Sexo,this.casos.value.estado)
    .subscribe(
      (data) => {
        this.mensaje = "Se guardo con exito";
      },
      (error) => {
        this.mensaje = "Problema al guardar el registro";
      }
    );
   

  }
}