import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IgxCarouselModule } from 'igniteui-angular';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  { path: '', redirectTo: '/ventas', pathMatch: 'full' },
  { path: 'ventas', component: VentasComponent }
  //{ path: 'clientes/page/:page', component: ClientesComponent },
  //{ path: 'clientes/form', component: FormComponent },
  //{ path: 'clientes/form/:id', component: FormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    VentasComponent
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
