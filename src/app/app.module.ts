import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { ProfessorComponent } from './professors/professor/professor.component';
import { StudentComponent } from './students/student/student.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkerComponent } from './workers/worker/worker.component';
import { DepartmentItemComponent } from './departments/department-item/department-item.component';
import { LibraryItemComponent } from './library/library-item/library-item.component';
import { DepartmentsService } from './services/departments.service';
import { StudentsService } from './services/students.service';
import { LibraryService } from './services/library.service';
import { ProfessorsService } from './services/professors.service';
import { WorkerService } from './services/worker.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    RoutingComponents,
    ProfessorComponent,
    StudentComponent, 
    ProfileComponent,
    WorkerComponent,
    DepartmentItemComponent,
    LibraryItemComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DepartmentsService, StudentsService, LibraryService, ProfessorsService, WorkerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
