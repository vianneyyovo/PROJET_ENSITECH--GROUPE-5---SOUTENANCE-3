import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AssociateCoursesComponent } from './associate-courses/associate-courses.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'home', component: HomeComponent },
    { path: 'create-student', component: CreateStudentComponent },
    { path: 'associate-courses', component: AssociateCoursesComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
