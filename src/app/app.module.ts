import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./components/app/app.component";
import { HeaderComponent } from "./components/header/header.component";
import { GraphComponent } from "./components/graph/graph.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { HttpClientModule } from "@angular/common/http";
import { WeatherService} from "./weather.service"
import { DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { CaseComponent } from './components/case/case.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, GraphComponent, CaseComponent],
  imports: [
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    ChartsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [WeatherService,DatePipe],
  bootstrap: [AppComponent],
  exports: [CaseComponent,MatDatepickerModule,
    MatNativeDateModule,]
})
export class AppModule {}
