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
  garantia:string="assets/seccion-dos/garantia.png"
  practico:string="assets/seccion-dos/practico.png"
  medida:string="assets/seccion-dos/medida.png"
  instructor:string="assets/seccion-dos/instructor.png"
  garantiatitulotxt="Garantía 100%"
  practicotitulotxt="Teoría y práctica"
  medidatitulotxt="Técnica didáctica"
  instructortitulotxt="Instructor experto"
  garantiadescripciontxt="En Edith Capacita te aseguramos la inversión al 100%. Sí no se cubren las expectativas del participante no paga."
  practicodescripciontxt="Edith Capacita te garantiza un curso 80% de practica y 20% de teoría."
  medidadescripciontxt="En Edith Capacita practicaras técnicas de aprendizaje acelerado a través de ejercicios individuales y grupales, asi cmomo dinámicas de role playing."
  instructordescripciontxt="Instructor experto en liderazgo, capacitado a niveles directivos, gerenciales, así como jefes de área y supervisores en las organizaciones. Hasta el momento más de 2,500 horas impartidas en el tema."
  constructor() { }

  ngOnInit(): void {
  }

}
