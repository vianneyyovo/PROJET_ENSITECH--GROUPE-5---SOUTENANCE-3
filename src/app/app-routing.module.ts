import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AssociateCoursesComponent } from './associate-courses/associate-courses.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LireInfoEtudiantComponent } from './lire-info-etudiant/lire-info-etudiant.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'home', component: HomeComponent },
    { path: 'create-student', component: CreateStudentComponent },
    { path: 'associate-courses', component: AssociateCoursesComponent },
    { path: 'lire-info-etudiant', component: LireInfoEtudiantComponent }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
