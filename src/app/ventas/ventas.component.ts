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
  descripcionsecciondos:string="Al finalizar el curso, el participante habrá practicado las técnicas de ventas mas efectivas, que acortan el tiempo del cierre y aceleran la toma de decisiones de tus clientes; desde una perspectiva de tus diferenciadores, incrementando tus ventas, al mismo tiempo que construyes relasciones productivas de largo plazo. Practizarás las técnicas de ventas más utilizadas por los vendedores más exitosaos en todo el mundo."
  margen2:string="assets/ventas/seccion-dos/margen2.png"

  public caracteristicasobj:any[] =[
    {
      "titulo":"Garantía 100%",
      "caracteristica": "En ExcellenT te aseguramos la inversión al 100%. Sí no se cubren las expectativas del participante no paga.",
      "ico":"assets/ventas/seccion-dos/garantia.png"
    },
    {
      "titulo":"Teoría y práctica",
      "caracteristica": "ExcellenT te garantiza un curso 80% de practico y 20% de teoríco.",
      "ico":"assets/ventas/seccion-dos/practico.png"
    },
    {
      "titulo":"Técnica didáctica",
      "caracteristica": "En ExcellenT practicaras técnicas de aprendizaje acelerado a través de ejercicios individuales y grupales, asi cmomo dinámicas de role playing.",
      "ico":"assets/ventas/seccion-dos/medida.png"
    },
    {
      "titulo":"Instructor experto",
      "caracteristica": "Instructor especialista con más de 20 años de experiencia en ventas. Ha capacitado a la fuerza de ventas de organizaciones transnacionales en todos los sectoresde la industria.",
      "ico":"assets/ventas/seccion-dos/instructor.png"
    }
    ]

  beneficios:string="BENEFICIOS DEL CURSO"
  selectedb:number=0
  selectedi:number=0
  colorcheck=false

        banderarombof(beneficio:number){
          this.selectedb=beneficio;
        }

        filterItemsOfType(beneficio){
          let beneficiof=this.beneficiosobj.filter(x => x.beneficio == beneficio);
          return beneficiof;
        }
  public beneficiosobj:any[] =[
    {
      "beneficio": 1,
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
      "beneficio": 2,
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
      "beneficio": 3,
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
      "beneficio": 4,
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
      "beneficio": 5,
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
      "beneficio": 6,
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




  izq:string="assets/ventas/seccion-dos/flechaderecha.png"
  der:string="assets/ventas/seccion-dos/flechaizquierda.png"


banderaincluyeico(){
  return this.incluyeobj[this.selectedi].ico
}

banderaincluyetext(){
  return this.incluyeobj[this.selectedi].titulo
}

incluyeizq(){

  if(this.selectedi==0){
    this.selectedi=this.incluyeobj.length-1;
  }else{
  this.selectedi-=1;
  }
}

incluyeder(){

  if(this.selectedi==(this.incluyeobj.length-1)){
    this.selectedi=0
  }else{
  this.selectedi+=1;
  }
}
      public incluyeobj:any[] =[
        {
          "titulo":"Asesoría Online",
          "ico":"assets/ventas/seccion-dos/incluye1.png"
      },
      {
        "titulo":"Manual del curso",
        "ico":"assets/ventas/seccion-dos/incluye2.png"
      },
      {
        "titulo":"Reconocimiento con validez oficial STPS",
        "ico":"assets/ventas/seccion-dos/incluye3.png"
      },
      {

        "titulo":"Test, evaluaciones y seguimiento",
        "ico":"assets/ventas/seccion-dos/incluye4.png"
      }
      ]

      //SeccionTres
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
