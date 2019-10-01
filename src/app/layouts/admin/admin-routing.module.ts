import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { DepartmentsListComponent } from '../../departments/departments-list/departments-list.component';
import { ProfessorsListComponent } from '../../professors/professors-list/professors-list.component';
import { StudentsListComponent } from '../../students/students-list/students-list.component';
import { LibraryListItemsComponent } from '../../library/library-list-items/library-list-items.component';
import { ProfileComponent } from '../../profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../navigation/navbar/navbar.component';
import { ProfessorComponent } from '../../professors/professor/professor.component';
import { MailComponent } from '../../profile/mail/mail.component';
import { LibraryItemComponent } from '../../library/library-item/library-item.component';
import { MainPanelComponent } from '../../navigation/main-panel/main-panel.component';
import { DepartmentItemComponent } from '../../departments/department-item/department-item.component';
import { FooterComponent } from '../../navigation/footer/footer.component';
import { SidebarComponent } from '../../navigation/sidebar/sidebar.component';
import { StudentComponent } from '../../students/student/student.component';
import { MailDetailComponent } from '../../profile/mail-detail/mail-detail.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    { path: "", redirectTo: "dashboard",  pathMatch: "full" },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'departments', component: DepartmentsListComponent },
    { path: 'professors', component: ProfessorsListComponent },
    { path: 'students', component: StudentsListComponent },
    { path: 'library', component: LibraryListItemsComponent },
    { path: 'profile', component: ProfileComponent }

];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [DashboardComponent, DepartmentsListComponent, ProfessorsListComponent,
        StudentsListComponent, LibraryListItemsComponent, ProfileComponent, NavbarComponent,
        SidebarComponent, FooterComponent, MainPanelComponent, ProfessorComponent,
        StudentComponent, DepartmentItemComponent, LibraryItemComponent, MailComponent,
        MailDetailComponent, AdminComponent],
    exports: [DashboardComponent, DepartmentsListComponent, ProfessorsListComponent,
        StudentsListComponent, LibraryListItemsComponent, ProfileComponent, NavbarComponent,
        SidebarComponent, FooterComponent, MainPanelComponent, ProfessorComponent,
        StudentComponent, DepartmentItemComponent, LibraryItemComponent, MailComponent,
        MailDetailComponent, AdminComponent]
})
export class AdminLayoutModule { }
