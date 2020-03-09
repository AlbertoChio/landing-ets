import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-tres',
  templateUrl: './seccion-tres.component.html',
  styleUrls: ['./seccion-tres.component.css']
})
export class SeccionTresComponent implements OnInit {

  inversion: string ="INVERSIÓN"
  margen2:string="assets/seccion-dos/margen2.png"
  margen4:string="assets/seccion-tres/margen4.png"
  margen5:string="assets/seccion-tres/margen5.png"
  titulosemana:string="Presencial-ENTRE SEMANA"
  preciosemana:string="$1,999"
  ahorro:string="Ahorras $2,400"
  constructor() { }

  ngOnInit(): void {
  }

}
