import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-cuatro',
  templateUrl: './seccion-cuatro.component.html',
  styleUrls: ['./seccion-cuatro.component.css']
})
export class SeccionCuatroComponent implements OnInit {
titulo: string ="DESCARGA EL TEMARIO"
descripcion: string ="Si te interesa este curso y quieres aprovechar una de nuestras ofertas, comunícate con nosotros y déjanos tu información de contacto para hacerte llegar el temario del curso a tu correo"
margen2:string="assets/seccion-dos/margen2.png"
  constructor() { }

  ngOnInit(): void {
  }

}
