import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-dos',
  templateUrl: './seccion-dos.component.html',
  styleUrls: ['./seccion-dos.component.css']
})
export class SeccionDosComponent implements OnInit {

  objetivo: string ="OBJETIVO"
  descripcion:string="Preparar a los líderes de la organización con los conocimientos y habilidades que les permitan ejercer el Liderazgo y Coaching a cada situación de su entorno laboral, personal, y de equipo, adoptando comportamientos proactivos de liderazgo fundamentado en principios y valores, consiguiendo el logro de las metas y objetivos organizacionales, por medio de habilidades de comunicación, motivación, manejo de conflictos, desarrollo de equipos de trabajo efectivos, inteligencia emocional y modelos de coaching para corregir problemas de desempeño y de actitudes."
  margen2:string="assets/seccion-dos/margen2.png"
  caracteristicas:string="assets/seccion-dos/caracteristicas.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
