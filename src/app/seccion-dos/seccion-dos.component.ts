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

  beneficios:string="BENEFICIOS DEL CURSO"

  izq:string="assets/seccion-dos/flechaderecha.png"
  der:string="assets/seccion-dos/flechaizquierda.png"
  ico:string="assets/seccion-dos/incluye1.png"

  selectedb:string="comunicacion"
  colorcheck=false
  public beneficiosobj:any[] =[
    {
      "beneficio": "comunicacion",
      "titulo":"COMUNICACIÓN EFECTIVA",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Practicará la comunicación efectiva para comunicarce a todos los nivieles de la organización y para saber dar ordenes e instrucciones a sus colaboradores."
        },
        {
          "id": 2,
          "descripcion":"Practicará la motivación positiva a través del reconocimiento, adecuado a su mensaje a cada individuo y sus motivaciones."
        },
        {
          "id": 3,
          "descripcion":"Practicará la retroalimentación positiva y negativa de acuerdo con los modelos de comunicación asertiva."
        }
      ],
      "ico":{
        "rojo":"assets/seccion-dos/comunicacionrojo.png",
        "blanco":"assets/seccion-dos/comunicacionblanco.png"
      }
    },
    {
      "beneficio": "desarrollo",
      "titulo":"DESARROLLO DE EQUIPOS",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Practicará las estrategías que le permitirán integrar y desarrollar equipos de trabajo efectivos, por medio de la implementación de códigos de equipo."
        }
      ],
      "ico":{
        "rojo":"assets/seccion-dos/desarrollorojo.png",
        "blanco":"assets/seccion-dos/desarrolloblanco.png"
      }
    },
    {
      "beneficio": "liderazgo",
      "titulo":"LIDERAZGO EFECTIVO O INEFECTIVO",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Identificará si su liderazgo es efectivo o inefectivo, y cuales son las causas."
        }
      ],
      "ico":{
        "rojo":"assets/seccion-dos/efectivorojo.png",
        "blanco":"assets/seccion-dos/efectivoblanco.png"
      }
    },
    {
      "beneficio": "valores",
      "titulo":"LIDERAZGO CON VALORES Y PRINCIPIOS",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Identificará las variables para aplicar el liderazgo correcto con acuerdo a la teoría de liderazgo situacional."
        }
      ],
      "ico":{
        "rojo":"assets/seccion-dos/valoresrojo.png",
        "blanco":"assets/seccion-dos/valoresblanco.png"
      }
    },
    {
      "beneficio": "estilo",
      "titulo":"DESCUBRE TU ESTILO DE LIDERAZGO",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Descubre tu estilo de liderazgo prodominante y su origen por medio de un test mismo que se analizará de manera personalizada."
        },
        {
          "id": 2,
          "descripcion":"Aprenderá las conductas y actitudes de cada estilo de liderazgo, así como sus ventajas y desventajas."
        }
      ],
      "ico":{
        "rojo":"assets/seccion-dos/estilorojo.png",
        "blanco":"assets/seccion-dos/estiloblanco.png"
      }
    },
    {
      "beneficio": "modelos",
      "titulo":"MODELOS DE COACHING",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Practicará los modelos de coaching para resolver los problemas típicos de desempeño y de malas conductas o actitudes de su equipo de trabajo y en lo individual."
        },
        {
          "id": 2,
          "descripcion":"Practicará técnicas de negociación para conceder, en lugar de ceder."
        },
        {
          "id": 3,
          "descripcion":"Reconocerá la inteligencia emocional como una herramienta prioritaria en la toma de decisiones y generadora de relaciones armónicas."
        }
      ],
      "ico":{
        "rojo":"assets/seccion-dos/modelosrojo.png",
        "blanco":"assets/seccion-dos/modelosblanco.png"
      }
    }

  ]

  public slides =
    [
        {
          src: "assets/images/svg/carousel/Onboarding1.svg"
        },
        {
          src: "assets/images/svg/carousel/Onboarding2.svg"
        },
        {
          src: "assets/images/svg/carousel/Onboarding3.svg"
        }
    ];


      filterItemsOfType(beneficio){
        let descripciones:any[]=[];
        let beneficiof=this.beneficiosobj.filter(x => x.beneficio == beneficio);

        return beneficiof;

      }

      banderarombof(beneficio:string){
        this.selectedb=beneficio;
      }

  ngOnInit(): void {
  }



}
