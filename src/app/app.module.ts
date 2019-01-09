import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AlertaComponent } from './paginas/alerta/alerta.component';
import { RecorrenciaComponent } from './paginas/recorrencia/recorrencia.component';
import { AgendaComponent } from './paginas/agenda/agenda.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { ConfiguracaoComponent } from './paginas/configuracao/configuracao.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppMenuMComponent } from './app-menu-m/app-menu-m.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AlertaComponent,
    RecorrenciaComponent,
    AgendaComponent,
    CadastroComponent,
    ConfiguracaoComponent,
    FormularioComponent,
    AppMenuComponent,
    AppMenuMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
