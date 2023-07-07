import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { Pag404Component } from './components/pag404/pag404.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'skills', component: SkillsComponent},
  {path:'education', component:EducationComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'contact',component: ContactComponent},
  {path:'perfil',component: PerfilComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:Pag404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
