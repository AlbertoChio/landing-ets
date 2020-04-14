import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liderazgo',
  templateUrl: './liderazgo.component.html',
  styleUrls: ['./seccion-cuatro.component.css',
              './seccion-tres.component.css',
              './seccion-dos.component.css',
              './banner.component.css']
})
export class LiderazgoComponent implements OnInit {
  //banner
  banner: string ="assets/liderazgo/banner/banner.jpg"
  logo:string="assets/liderazgo/banner/logo.png"
  curso:string="LIDERAZGO Y COACHING"
  margen1:string="assets/liderazgo/banner/margen1.png"
  descripcion:string='¿Sabias que tu estilo de liderazgo podría estar frenando el potencial y el desarrollo de tu equipo de trabajo? En este curso-taller aprenderas que no existe un único estilo para tener éxito como líder.'
  pathbanner:string="assets/liderazgo/banner/path_banner.png"
  //seccion dos
  objetivo: string ="OBJETIVO"
  descripcionsecciondos:string="Preparar a los líderes de la organización con los conocimientos y habilidades que les permitan ejercer el Liderazgo y Coaching a cada situación de su entorno laboral, personal, y de equipo, adoptando comportamientos proactivos de liderazgo fundamentado en principios y valores, consiguiendo el logro de las metas y objetivos organizacionales, por medio de habilidades de comunicación, motivación, manejo de conflictos, desarrollo de equipos de trabajo efectivos, inteligencia emocional y modelos de coaching para corregir problemas de desempeño y de actitudes."
  margen2:string="assets/liderazgo/seccion-dos/margen2.png"
  public caracteristicasobj:any[] =[
    {
      "titulo":"Garantía 100%",
      "caracteristica": "En Edith Capacita te aseguramos la inversión al 100%. Sí no se cubren las expectativas del participante no paga.",
      "ico":"assets/liderazgo/seccion-dos/garantia.png"
    },
    {
      "titulo":"Teoría y práctica",
      "caracteristica": "Edith Capacita te garantiza un curso 80% de practica y 20% de teoría.",
      "ico":"assets/liderazgo/seccion-dos/practico.png"
    },
    {
      "titulo":"Técnica didáctica",
      "caracteristica": "En Edith Capacita practicaras técnicas de aprendizaje acelerado a través de ejercicios individuales y grupales, asi cmomo dinámicas de role playing.",
      "ico":"assets/liderazgo/seccion-dos/medida.png"
    },
    {
      "titulo":"Instructor experto",
      "caracteristica": "Instructor especialista con más de 20 años de experiencia en ventas. Ha capacitado a la fuerza de ventas de organizaciones transnacionales en todos los sectoresde la industria.",
      "ico":"assets/liderazgo/seccion-dos/instructor.png"
    }
    ]

  beneficios:string="BENEFICIOS DEL CURSO"

  izq:string="assets/liderazgo/seccion-dos/flechaderecha.png"
  der:string="assets/liderazgo/seccion-dos/flechaizquierda.png"
  ico:string="assets/liderazgo/seccion-dos/incluye1.png"

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
        "rojo":"assets/liderazgo/seccion-dos/comunicacionrojo.png",
        "blanco":"assets/liderazgo/seccion-dos/comunicacionblanco.png"
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
        "rojo":"assets/liderazgo/seccion-dos/desarrollorojo.png",
        "blanco":"assets/liderazgo/seccion-dos/desarrolloblanco.png"
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
        "rojo":"assets/liderazgo/seccion-dos/efectivorojo.png",
        "blanco":"assets/liderazgo/seccion-dos/efectivoblanco.png"
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
        "rojo":"assets/liderazgo/seccion-dos/valoresrojo.png",
        "blanco":"assets/liderazgo/seccion-dos/valoresblanco.png"
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
        "rojo":"assets/liderazgo/seccion-dos/estilorojo.png",
        "blanco":"assets/liderazgo/seccion-dos/estiloblanco.png"
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
        "rojo":"assets/liderazgo/seccion-dos/modelosrojo.png",
        "blanco":"assets/liderazgo/seccion-dos/modelosblanco.png"
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
      //seccion SeccionTres
      inversion: string ="INVERSIÓN"
      margen4:string="assets/liderazgo/seccion-tres/margen4.png"
      margen5:string="assets/liderazgo/seccion-tres/margen5.png"
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
      //SeccionCuatro
      titulo: string ="DESCARGA EL TEMARIO"
      descripcionseccioncuatro: string ="Si te interesa este curso y quieres aprovechar una de nuestras ofertas, comunícate con nosotros y déjanos tu información de contacto para hacerte llegar el temario del curso a tu correo"


  constructor() { }

  ngOnInit(): void {
  }

}
