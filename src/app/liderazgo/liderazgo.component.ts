import { Component, OnInit } from '@angular/core';
import { EmailService } from '../ventas/email.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-liderazgo',
  templateUrl: './liderazgo.component.html',
  styleUrls: ['./liderazgo.component.css']
})
export class LiderazgoComponent implements OnInit {
  //banner
  banner: string ="assets/liderazgo/banner/banner.jpg"
  logo:string="assets/liderazgo/banner/logo.png"
  curso:string="CURSO LIDERAZGO Y COACHING"
  tipocurso:string="Interactivo OnLine"
  margen1:string="assets/liderazgo/banner/margen1.png"
  descripcion:string='¿Sabias que tu estilo de liderazgo podría estar frenando el potencial y el desarrollo de tu equipo de trabajo? En este curso aprenderás que no existe un único estilo para tener éxito como líder.'
  pathbanner:string="assets/liderazgo/banner/path_banner.png"

  //seccion dos
  objetivo: string ="OBJETIVO"
  descripcionsecciondos:string="Preparar a los lideres de la organización con los conocimientos y habilidades que les permitan ejercer el liderazgo y coaching a cada situación de su entorno laboral, personal y de equipo, adoptando comportamientos proactivos de liderazgo fundamentado en principios y valores. consiguiendo el logro de las metas y objetivos organizacionales, por medio de habilidades de comunicación, motivación, manejo de conflictos, desarrollo de equipos de trabajo efectivos, inteligencia emocional y modelos de coaching para corregir problemas de desempeño y de actitudes."
  margen2:string="assets/liderazgo/seccion-dos/margen2.png"

  public caracteristicasobj:any[] =[
    {
      "titulo":"Garantía 100%",
      "caracteristica": "En ExcellenT te aseguramos la inversión al 100%. Sí no se cubren las expectativas del participante no paga.",
      "ico":"assets/liderazgo/seccion-dos/garantia.png"
    },
    {
      "titulo":"Teoría y práctica",
      "caracteristica": "ExcellenT te garantiza un curso 80% de practico y 20% de teoríco.",
      "ico":"assets/liderazgo/seccion-dos/practico.png"
    },
    {
      "titulo":"Técnica didáctica",
      "caracteristica": "En ExcellenT practicaras técnicas de aprendizaje acelerado a través de ejercicios individuales y grupales, asi como dinámicas de role playing.",
      "ico":"assets/liderazgo/seccion-dos/medida.png"
    },
    {
      "titulo":"Instructor experto",
      "caracteristica": "Instructor experto en liderazgo a nivel directivo, gerencial asi como jefe de área. Con mas de 2,500 horas impartidas en el tema.",
      "ico":"assets/liderazgo/seccion-dos/instructor.png"
    }
    ]

  beneficios:string="BENEFICIOS DEL CURSO"
  selectedb:number=0
  selectedi:number=0
  colorcheck=false

        banderarombof(beneficio:number){
          this.selectedb=beneficio;
        }

        filterItemsOfType(beneficio:number){
          let beneficiof=this.beneficiosobj.filter(x => x.beneficio == beneficio);
          return beneficiof;
        }
  public beneficiosobj:any[] =[
    {
      "beneficio": 0,
      "titulo":"DESCUBRE TU ESTILO DE LIDERAZGO",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Descubre tu estilo de liderazgo predominante y su origen por medio de un test mismo que se analizará de manera personalizada."
        },
        {
          "id": 2,
          "descripcion":"Aprederá las conductas y actitudes de cada estilo de liderazgo, asi como sus ventajas y desventajas."
        }
      ],
      "ico":{
        "rojo":"assets/liderazgo/seccion-dos/estilorojo.png",
        "blanco":"assets/liderazgo/seccion-dos/estiloblanco.png"
      }
    },
    {
      "beneficio": 1,
      "titulo":"LIDERAZGO CON VALORES Y PRINCIPIOS",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Identificará las variables para aplicar el liderazgo correcto de acuerdo a la teoría de liderazgo situacional."
        }
      ],
      "ico":{
        "rojo":"assets/liderazgo/seccion-dos/valoresrojo.png",
        "blanco":"assets/liderazgo/seccion-dos/valoresblanco.png"
      }
    },
    {
      "beneficio": 2,
      "titulo":"LIDERAZGO EFECTIVO O INEFECTIVO",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Identificará si su liderazgo es efectivo o inefectivo y cuales son las causas."
        }
      ],
      "ico":{
        "rojo":"assets/liderazgo/seccion-dos/efectivorojo.png",
        "blanco":"assets/liderazgo/seccion-dos/efectivoblanco.png"
      }
    },
    {
      "beneficio": 3,
      "titulo":"DESARROLLO DE EQUIPOS DE TRABAJO",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Practicará las estrategias que le permitirán integrar y desarrollar equipos de trabajo efectivos, por medio de la implementación de códigos de equipo."
        }
      ],
      "ico":{
        "rojo":"assets/liderazgo/seccion-dos/desarrollorojo.png",
        "blanco":"assets/liderazgo/seccion-dos/desarrolloblanco.png"
      }
    },
    {
      "beneficio": 4,
      "titulo":"COMUNICACIÓN EFECTIVA",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Practicará la comunicación efectiva para comunicarse a todos los niveles de la organización y para saber dar órdenes e instrucciones a sus colaboradores."
        },
        {
          "id": 2,
          "descripcion":"Practicará la motivación positiva a través del reconocimiento, adecuando su mensaje a cada individuo y sus motivaciones."
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
      "beneficio": 5,
      "titulo":"MODELOS DE COACHING",
      "descripciones":[
        {
          "id": 1,
          "descripcion":'Practicará los modelos de coaching para resolver los problemas típicos de desempeño y de malas conductas o actitudes de su equipo de trabajo y en lo individual.'
        },
        {
          "id": 2,
          "descripcion":'Practicará técnicas de negociación para conceder, en lugar de ceder.'
        },
        {
          "id": 3,
          "descripcion":'Reconocerá la inteligencia emocional como una herramienta prioritaria en la toma de decisiones y generadora de relaciones armónicas.'
        },
      ],
      "ico":{
        "rojo":"assets/liderazgo/seccion-dos/modelosrojo.png",
        "blanco":"assets/liderazgo/seccion-dos/modelosblanco.png"
      }
    }

  ]




  izq:string="assets/liderazgo/seccion-dos/flechaderecha.png"
  der:string="assets/liderazgo/seccion-dos/flechaizquierda.png"


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
          "ico":"assets/liderazgo/seccion-dos/incluye1.png"
      },
      {
        "titulo":"Manual del curso",
        "ico":"assets/liderazgo/seccion-dos/incluye2.png"
      },
      {
        "titulo":"Reconocimiento con validez oficial STPS",
        "ico":"assets/liderazgo/seccion-dos/incluye3.png"
      },
      {

        "titulo":"Test, evaluaciones y seguimiento",
        "ico":"assets/liderazgo/seccion-dos/incluye4.png"
      }
      ]

      //SeccionTres
      inversion: string ="INVERSIÓN"
      margen4:string="assets/liderazgo/seccion-tres/margen4.png"
      margen5:string="assets/liderazgo/seccion-tres/margen5.png"
      descuento:string="assets/liderazgo/seccion-tres/disccountt.png"
      titulosemana:string="Presencial-ENTRE SEMANA"
      public precios:any[] =[
        {
          "id": "1",
          "titulo":"ENTRE SEMANA",
          "precio":"$2,850 .00 + IVA",
          "ahorras":"Aprovecha 10% de descuento adicional por pronto pago",
          "horas": "15 horas",
          "preciolista": "Precio de lista: $4,400.00",
          "fechas":"4, 5 y 6  de Noviembre",
          "horario":"De 15:00hrs- 20:00hrs",
          "sesiones": "3 Sesiones de 5 horas",
          "lugar":"CDMX"
        },
        {
          "id": "2",
          "titulo":"FINES DE SEMANA",
          "precio":"$2,850 .00 + IVA",
          "ahorras":"Aprovecha 10% de descuento adicional por pronto pago",
          "horas": "15 horas",
          "preciolista": "Precio de lista: $4,800.00",
          "fechas":"31 de Octubre y 7 de Noviembre",
          "horario":"De 8:00hrs-15:30hrs",
          "sesiones": "2 Sesiones de 7.5 horas",
          "lugar":"CDMX"
        }
      ]
      //SeccionCuatro
      titulo: string ="DESCARGA EL TEMARIO"
      descripcionseccioncuatro: string ="Si te interesa este curso y quieres aprovechar una de nuestras ofertas, comunícate con nosotros y déjanos tu información de contacto para hacerte llegar el temario del curso a tu correo"
      cliente : any;
      sending:boolean;



  constructor(private emailService: EmailService) { }


  ngOnInit(): void {
    this.cliente={
            "nombre":"",
            "correo":"",
            "telefono":"",
            "razon":"",
            "curso":""
          }
  }

  public sendemail(): void{
    console.log('clicked!');
    console.log(this.cliente);
    this.emailService.SendEmail(this.cliente).subscribe(
      log => console.log(log)
    );
  }

}
