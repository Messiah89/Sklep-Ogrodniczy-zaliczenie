import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArtykulyComponent } from './Menu/artykuly/artykuly.component';
import { ONasComponent } from './Menu/o-nas/o-nas.component';
import { DodajArtykulyComponent } from './Menu/dodaj-artykuly/dodaj-artykuly.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/onas', pathMatch: 'full'},
  {path: 'artykuly', component: ArtykulyComponent},
  {path: 'dodajartykuly', component: DodajArtykulyComponent},
  {path: 'onas', component: ONasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArtykulyComponent,
    ONasComponent,
    DodajArtykulyComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
