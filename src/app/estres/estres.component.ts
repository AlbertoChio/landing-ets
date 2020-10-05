import { Component, OnInit } from '@angular/core';
import { EmailService } from '../ventas/email.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-estres',
  templateUrl: './estres.component.html',
  styleUrls: ['./estres.component.css']
})
export class EstresComponent implements OnInit {

    //banner
    banner: string ="assets/ventas/banner/banner.jpg"
    logo:string="assets/ventas/banner/logo.png"
    curso:string="CURSO INTELIGENCIA EMOCIONAL Y MANEJO DEL ESTRÉS"
    tipocurso:string="Interactivo OnLine"
    margen1:string="assets/ventas/banner/margen1.png"
    descripcion:string='¿Sabías que todas las decisión que tomamos tienen su origen en nuestro sistema de creencias y en nuestras emociones? ¿Tu eres del tipo de personas que toma las responsabilidad y las riendas de tu vida, o permites que tus emociones determinen tu destino? Asiste al mejor y más memorable curso - taller de Inteligencia emocional, aprende y desarrolla  las competencias de una persona emocionalmente inteligente.'
    pathbanner:string="assets/ventas/banner/path_banner.png"

    //seccion dos
    objetivo: string ="OBJETIVO"
    descripcionsecciondos:string="Al término del evento, el participante identificará la importancia y el impacto que tienen sus emociones, practicando las competencias de la inteligencia emocional; autoconocimiento, autocontrol, automotivación, empatía y habilidades sociales, para el logro de sus metas y objetivos en el ámbito personal y laboral, practicando técnicas para manejar el estrés."
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
        "titulo":"LOGRA TUS METAS",
        "descripciones":[
          {
            "id": 1,
            "descripcion":"Reconocer que las emociones no son buenas ni malas."
          },
          {
            "id": 2,
            "descripcion":"Reconocer que las emociones pueden actuar en nuestro beneficio."
          },
          {
            "id": 3,
            "descripcion":"Reconocer que las emociones pueden ser responsables de nuestra salud o enfermedad."
          }
        ],
        "ico":{
          "rojo":"assets/ventas/seccion-dos/venderasrojo.png",
          "blanco":"assets/ventas/seccion-dos/venderasblanco.png"
        }
      },
      {
        "beneficio": 1,
        "titulo":"AUTOCNOCIMIENTO",
        "descripciones":[
          {
            "id": 1,
            "descripcion":"Conocer las emociones básicas y sus matices."
          },
          {
            "id": 2,
            "descripcion":"Conocer el funcionamiento de las emociones."
          },
          {
            "id": 3,
            "descripcion":"Ponerle nombre a las emociones y su orígen."
          }
        ],
        "ico":{
          "rojo":"assets/ventas/seccion-dos/estilorojo.png",
          "blanco":"assets/ventas/seccion-dos/estiloblanco.png"
        }
      },
      {
        "beneficio": 2,
        "titulo":"AUTOCONTROL",
        "descripciones":[
          {
            "id": 1,
            "descripcion":"Identificar lo tres cerebros."
          },
          {
            "id": 2,
            "descripcion":"Identificar los detonadores del enojo."
          },
          {
            "id": 3,
            "descripcion":"Autocontrolar las emociones, evitando daños colaterales."
          },
          {
            "id": 4,
            "descripcion":"Técnicas de autocontrol."
          }
        ],
        "ico":{
          "rojo":"assets/ventas/seccion-dos/tecnicasrojo.png",
          "blanco":"assets/ventas/seccion-dos/tecnicasblanco.png"
        }
      },
      {
        "beneficio": 3,
        "titulo":"AUTOMOTIVACIÓN",
        "descripciones":[
          {
            "id": 1,
            "descripcion":"Reconocerá que la automotivación le da propósito a su vida."
          },
          {
            "id": 2,
            "descripcion":"Establecerá sus propias metas y  objetivos."
          },
          {
            "id": 3,
            "descripcion":"Identificará lo esencial en las relaciones y el resultado de estas."
          }
        ],
        "ico":{
          "rojo":"assets/ventas/seccion-dos/objecionesrojo.png",
          "blanco":"assets/ventas/seccion-dos/objecionesblanco.png"
        }
      },
      {
        "beneficio": 4,
        "titulo":"EMPATÍA",
        "descripciones":[
          {
            "id": 1,
            "descripcion":"Desarrollará distintas formas de generar empatía."
          },
          {
            "id": 2,
            "descripcion":"Identificará la empatía como una forma de evitar victimizarse y no juzgar."
          },
          {
            "id": 3,
            "descripcion":"Establecerá mayor conexión emocional con todas las personas con las que interactúa."
          }
        ],
        "ico":{
          "rojo":"assets/ventas/seccion-dos/conocerasrojo.png",
          "blanco":"assets/ventas/seccion-dos/conocerasblanco.png"
        }
      },
      {
        "beneficio": 5,
        "titulo":"HABILIDADES SOCIALES",
        "descripciones":[
          {
            "id": 1,
            "descripcion":'Identificará que en su relación con otros, puede ejercer el liderazgo, trabajo en equipo, manejo de conflictos, negociación y comunicación efectiva para tener un mejor resultado, producto de sus relaciones interpersonales.'
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
        public precios:any[] =[
          {
            "id": "1",
            "titulo":"ENTRE SEMANA",
            "precio":"$1,750.00 + IVA",
            "ahorras":"Ahorras $2,640.00",
            "horas": "12 horas",
            "preciolista": "Precio de lista: $4,400.00",
            "fechas":"29 y 30 de octubre ",
            "horario":"De 14:00hrs- 20:00hrs",
            "sesiones": "2 sesiones de 6 horas",
            "lugar":"CDMX"
          }
        ]
        //SeccionCuatro
        titulo: string ="SOLICITA EL TEMARIO"
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
