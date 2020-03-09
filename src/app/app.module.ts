import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IgxCarouselModule } from 'igniteui-angular';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { SeccionDosComponent } from './seccion-dos/seccion-dos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeccionTresComponent } from './seccion-tres/seccion-tres.component';

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
    SeccionDosComponent,
    SeccionTresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    IgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
