import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { SeccionDosComponent } from './seccion-dos/seccion-dos.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/lideazgo-coaching', pathMatch: 'full' },
  //{ path: 'directivas', component: DirectivaComponent },
  //{ path: 'clientes', component: ClientesComponent },
  //{ path: 'clientes/page/:page', component: ClientesComponent },
  //{ path: 'clientes/form', component: FormComponent },
  //{ path: 'clientes/form/:id', component: FormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SeccionDosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
