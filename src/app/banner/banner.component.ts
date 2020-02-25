import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banner: string ="assets/banner/banner.jpg"
  logo:string="assets/banner/logo.png"
  curso:string="LIDERAZGO Y COACHING"
  margen1:string="assets/banner/margen1.png"
  descripcion:string='¿Sabias que tu estilo de liderazgo podría estar frenando el potencial y el desarrollo de tu equipo de trabajo? En este curso-taller aprenderas que no existe un único estilo para tener éxito como líder.'
  pathbanner:string="assets/banner/path_banner.png"
  constructor() { }

  ngOnInit(): void {
  }

}
