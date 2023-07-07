import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PerfilComponent} from './components/perfil/perfil.component';
import { Pag404Component } from './components/pag404/pag404.component';
import { FooterComponent } from './components/footer/footer.component';

//Formularios en Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//----

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    HomeComponent,
    ContactComponent,
    PerfilComponent,
    Pag404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Formularios en Angular
    FormsModule, ReactiveFormsModule
    //----
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
