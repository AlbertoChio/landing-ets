import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./seccion-cuatro.component.css',
              './seccion-tres.component.css',
              './seccion-dos.component.css',
              './banner.component.css']
})
export class VentasComponent implements OnInit {

  //banner
  banner: string ="assets/ventas/banner/banner.jpg"
  logo:string="assets/ventas/banner/logo.png"
  curso:string="VENTAS TELÉFONICAS"
  tipocurso:string="CURSO Interactivo OnLine"
  margen1:string="assets/ventas/banner/margen1.png"
  descripcion:string='¿Te interesa incrementar tus ventas y acortar el tiempo que te toma cerrar una venta? Aprende a vender tangibles e intangibles como los mejores vendedores.'
  pathbanner:string="assets/ventas/banner/path_banner.png"
  //seccion dos
  objetivo: string ="OBJETIVO"
  descripcionsecciondos:string="Al finalizar el curso, el prticipante habrá practicado las técnicas de ventas mas efectivas, que acortan el tiempo del cierre y aceleran la toma de decisiones de tus clientes; desde una perspectiva de tus diferenciadores, incrementando tus ventas, al mismo tiempo que construyes relasciones productivas de largo plazo. Practizarás las técnicas de ventas más utilizadas por los vendedores más exitosaos en todo el mundo."
  margen2:string="assets/ventas/seccion-dos/margen2.png"

  public caracteristicasobj:any[] =[
    {
      "titulo":"Garantía 100%",
      "caracteristica": "En Edith Capacita te aseguramos la inversión al 100%. Sí no se cubren las expectativas del participante no paga.",
      "ico":"assets/ventas/seccion-dos/garantia.png"
    },
    {
      "titulo":"Teoría y práctica",
      "caracteristica": "Edith Capacita te garantiza un curso 80% de practica y 20% de teoría.",
      "ico":"assets/ventas/seccion-dos/practico.png"
    },
    {
      "titulo":"Técnica didáctica",
      "caracteristica": "En Edith Capacita practicaras técnicas de aprendizaje acelerado a través de ejercicios individuales y grupales, asi cmomo dinámicas de role playing.",
      "ico":"assets/ventas/seccion-dos/medida.png"
    },
    {
      "titulo":"Instructor experto",
      "caracteristica": "Instructor especialista con más de 20 años de experiencia en ventas. Ha capacitado a la fuerza de ventas de organizaciones transnacionales en todos los sectoresde la industria.",
      "ico":"assets/ventas/seccion-dos/instructor.png"
    }
    ]

  beneficios:string="BENEFICIOS DEL CURSO"

  izq:string="assets/ventas/seccion-dos/flechaderecha.png"
  der:string="assets/ventas/seccion-dos/flechaizquierda.png"
  ico:string="assets/ventas/seccion-dos/incluye1.png"

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
        "rojo":"assets/ventas/seccion-dos/comunicacionrojo.png",
        "blanco":"assets/ventas/seccion-dos/comunicacionblanco.png"
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
        "rojo":"assets/ventas/seccion-dos/desarrollorojo.png",
        "blanco":"assets/ventas/seccion-dos/desarrolloblanco.png"
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
        "rojo":"assets/ventas/seccion-dos/efectivorojo.png",
        "blanco":"assets/ventas/seccion-dos/efectivoblanco.png"
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
        "rojo":"assets/ventas/seccion-dos/valoresrojo.png",
        "blanco":"assets/ventas/seccion-dos/valoresblanco.png"
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
        "rojo":"assets/ventas/seccion-dos/estilorojo.png",
        "blanco":"assets/ventas/seccion-dos/estiloblanco.png"
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
        "rojo":"assets/ventas/seccion-dos/modelosrojo.png",
        "blanco":"assets/ventas/seccion-dos/modelosblanco.png"
      }
    }

  ]

  public slides =
    [
        {
          src: "assets/ventas/images/svg/carousel/Onboarding1.svg"
        },
        {
          src: "assets/ventas/images/svg/carousel/Onboarding2.svg"
        },
        {
          src: "assets/ventas/images/svg/carousel/Onboarding3.svg"
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
      margen4:string="assets/ventas/seccion-tres/margen4.png"
      margen5:string="assets/ventas/seccion-tres/margen5.png"
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
