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
  pregular:string="Ahorras $2,400"
  public precios:any[] =[
    {
      "id": "1",
      "titulo":"Presencial-ENTRE SEMANA",
      "precio":"$2,850",
      "ahorras":"Ahorras $4,800",
      "horas": "15 horas",
      "preciolista": "Precio de lista: $4,400",
      "fechas":"Del al de ",
      "horario":"Horario: 16:00 p.m. a 19:00 p.m.",
      "sesiones": "Sesiones de 3 horas",
      "lugar":"CDMX"
    },
    {
      "id": "2",
      "titulo":"Presencial-ENTRE SEMANA",
      "precio":"$2,850",
      "ahorras":"Ahorras $4,800",
      "horas": "15 horas",
      "preciolista": "Precio de lista: $4,400",
      "fechas":"Del al de ",
      "horario":"Horario: 16:00 p.m. a 19:00 p.m.",
      "sesiones": "Sesiones de 3 horas",
      "lugar":"CDMX"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
