import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StatisticComponent } from './statistic/statistic.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AssociateCoursesComponent } from './associate-courses/associate-courses.component';
import { LireInfoEtudiantComponent } from './lire-info-etudiant/lire-info-etudiant.component';
import { ModifierInfoEtudiantComponent } from './modifier-info-etudiant/modifier-info-etudiant.component';
import { ListeDesEtudiantComponent } from './liste-des-etudiant/liste-des-etudiant.component';
import { CreerUnCoursComponent } from './creer-un-cours/creer-un-cours.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    HomeComponent,
    HeaderComponent,
    StatisticComponent,
    FooterComponent,
    CreateStudentComponent,
    AssociateCoursesComponent,
    LireInfoEtudiantComponent,
    ModifierInfoEtudiantComponent,
    ListeDesEtudiantComponent,
    CreerUnCoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
