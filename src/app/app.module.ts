import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';

import { DepartmentsService } from './services/departments.service';
import { StudentsService } from './services/students.service';
import { LibraryService } from './services/library.service';
import { ProfessorsService } from './services/professors.service';
import { AdminLayoutModule } from './layouts/admin/admin-routing.module';
import { AuthLayoutModule } from './layouts/auth/auth-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminLayoutModule,
    AuthLayoutModule

  ],
  providers: [DepartmentsService, StudentsService, LibraryService, ProfessorsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
