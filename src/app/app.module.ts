import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IgxCarouselModule } from 'igniteui-angular';
import { AppComponent } from './app.component';
import { VentasComponent } from './ventas/ventas.component';
import { LiderazgoComponent } from './liderazgo/liderazgo.component';
import { EstresComponent } from './estres/estres.component';

const routes: Routes = [
  { path: 'ventas', component: VentasComponent },
  { path: 'liderazgo', component: LiderazgoComponent },
  { path: 'inteligencia', component: EstresComponent }
  //{ path: 'clientes/form', component: FormComponent },
  //{ path: 'clientes/form/:id', component: FormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    LiderazgoComponent,
    EstresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    IgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
