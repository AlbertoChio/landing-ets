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
  descripcionsecciondos:string="Al finalizar el curso, el participante habrá practicado las técnicas de ventas mas efectivas, que acortan el tiempo del cierre y aceleran la toma de decisiones de tus clientes; desde una perspectiva de tus diferenciadores, incrementando tus ventas, al mismo tiempo que construyes relaciones productivas de largo plazo. Practicarás las técnicas de ventas más utilizadas por los vendedores más exitosaos en todo el mundo."
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
      "caracteristica": "En ExcellenT practicaras técnicas de aprendizaje acelerado a través de ejercicios individuales y grupales, asi como dinámicas de role playing.",
      "ico":"assets/ventas/seccion-dos/medida.png"
    },
    {
      "titulo":"Instructor experto",
      "caracteristica": "Instructor especialista con más de 20 años de experiencia en ventas. Ha capacitado a la fuerza de ventas de organizaciones transnacionales en todos los sectores de la industria.",
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

        filterItemsOfType(beneficio:number){
          let beneficiof=this.beneficiosobj.filter(x => x.beneficio == beneficio);
          return beneficiof;
        }
  public beneficiosobj:any[] =[
    {
      "beneficio": 0,
      "titulo":"NO VENDERAS POR PRECIO",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"DEJARAS DE VENDER POR PRECIO, porque el valor de tu ofera es superior al precio de tu inversión y eso le quedará muy claro al cliente o prospecto, utilizando las técnicas de venta correcta. Venderás a partir de los diferenciadores de tu solución o tus productos."
        }
      ],
      "ico":{
        "rojo":"assets/ventas/seccion-dos/venderasrojo.png",
        "blanco":"assets/ventas/seccion-dos/venderasblanco.png"
      }
    },
    {
      "beneficio": 1,
      "titulo":"IDENTIFICA TU ESTILO DE VENTA",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Identificará su estilo favorito para vender, reconociendo que puede desarrollar rasgos de vendedores estrella."
        }
      ],
      "ico":{
        "rojo":"assets/ventas/seccion-dos/estilorojo.png",
        "blanco":"assets/ventas/seccion-dos/estiloblanco.png"
      }
    },
    {
      "beneficio": 2,
      "titulo":"TÉCNICAS DE VENTA",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Desarrollará las competencias de un vendedor estrella con técnicas."
        },
        {
          "id": 2,
          "descripcion":"Aprenderá técnicas para vender sin que parezca que está vendiendo."
        },
        {
          "id": 3,
          "descripcion":"Podrá articular argumentaciones y presentaciones de venta en 30 seg. con propuesta de valor."
        },
        {
          "id": 4,
          "descripcion":"Cuando sea necesario aplicará técnicas de cierre de una manera natural, aunque si aplica correctamente las técnicas aprendidas en el curso, el cierre se dará por sí solo."
        }
      ],
      "ico":{
        "rojo":"assets/ventas/seccion-dos/tecnicasrojo.png",
        "blanco":"assets/ventas/seccion-dos/tecnicasblanco.png"
      }
    },
    {
      "beneficio": 3,
      "titulo":"NO MÁS OBJECIONES",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Las objeciones se reducirán a su minima expresión."
        },
        {
          "id": 3,
          "descripcion":"Por primera vez te sentirás cómodo en el manejo de objeciones."
        }
      ],
      "ico":{
        "rojo":"assets/ventas/seccion-dos/objecionesrojo.png",
        "blanco":"assets/ventas/seccion-dos/objecionesblanco.png"
      }
    },
    {
      "beneficio": 4,
      "titulo":"CONOCERÁS A TU CLIENTE",
      "descripciones":[
        {
          "id": 1,
          "descripcion":"Aprenderá técnicas de comunicación para adecuar el mesaje de venta de acuerdo a la personalidad y motivación del cliente."
        },
        {
          "id": 2,
          "descripcion":"Practicará técnicas de comunicación efectiva como escucha activa y empatia para crear conexión emocional con el cliente."
        }
      ],
      "ico":{
        "rojo":"assets/ventas/seccion-dos/conocerasrojo.png",
        "blanco":"assets/ventas/seccion-dos/conocerasblanco.png"
      }
    },
    {
      "beneficio": 5,
      "titulo":"ASESORA, NO VENDAS",
      "descripciones":[
        {
          "id": 1,
          "descripcion":'El cliente experimentará la sensación de que está siendo asesorado, no parecera que estás vendiendo y "empujando la venta".'
        }
      ],
      "ico":{
        "rojo":"assets/ventas/seccion-dos/asesorarojo.png",
        "blanco":"assets/ventas/seccion-dos/asesorablanco.png"
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
      descuento:string="assets/ventas/seccion-tres/disccountt.png"
      titulosemana:string="Presencial-ENTRE SEMANA"
      preciosemana:string="$1,999"
      pregular:string="Ahorras $2,400"
      public precios:any[] =[
        {
          "id": "1",
          "titulo":"ENTRE SEMANA",
          "precio":"$1,700.00",
          "ahorras":"Ahorras $1,700.00",
          "horas": "15 horas",
          "preciolista": "Precio de lista: $3,400.00",
          "fechas":"Del 18 al 22 de Mayo",
          "horario":"Horario: 16:00 horas a 19:00 horas",
          "sesiones": "5 sesiones de 3 horas",
          "lugar":"CDMX"
        },
        {
          "id": "2",
          "titulo":"FINES DE SEMANA",
          "precio":"$1,900.00",
          "ahorras":"Ahorras $1,900.00",
          "horas": "15 horas",
          "preciolista": "Precio de lista: $3,800.00",
          "fechas":"Del 16 al 23 de Mayo",
          "horario":"Horario: 08:00 horas a 15:30 horas",
          "sesiones": "2 Sesiones de 7.5 horas",
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
