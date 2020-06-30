import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrioproBodyComponent } from './criopro-body/criopro-body.component';
import { CrioproFooterComponent } from './criopro-footer/criopro-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CrioproBodyComponent,
    CrioproFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
