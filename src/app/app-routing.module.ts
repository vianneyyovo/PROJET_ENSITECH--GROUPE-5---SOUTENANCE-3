import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AssociateCoursesComponent } from './associate-courses/associate-courses.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LireInfoEtudiantComponent } from './lire-info-etudiant/lire-info-etudiant.component';
import { ModifierInfoEtudiantComponent } from './modifier-info-etudiant/modifier-info-etudiant.component';
import { ListeDesEtudiantComponent } from './liste-des-etudiant/liste-des-etudiant.component';
import { CreerUnCoursComponent } from './creer-un-cours/creer-un-cours.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'home', component: HomeComponent },
    { path: 'create-student', component: CreateStudentComponent },
    { path: 'associate-courses', component: AssociateCoursesComponent },
    { path: 'lire-info-etudiant', component: LireInfoEtudiantComponent },
    { path: 'modifer-info-etudiant', component: ModifierInfoEtudiantComponent },
    { path: 'liste-des-etudiant', component: ListeDesEtudiantComponent },
    { path: 'creer-un-cours', component: CreerUnCoursComponent }



];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
