import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './layouts/sign-up/sign-up.component';
import { SignInComponent } from './layouts/sign-in/sign-in.component';
import { LibraryListItemsComponent } from './library/library-list-items/library-list-items.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkersListsComponent } from './workers/workers-lists/workers-lists.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { DepartmentsListComponent } from './departments/departments-list/departments-list.component';
import { ProfessorsListComponent } from './professors/professors-list/professors-list.component';

const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'departments', component: DepartmentsListComponent},    
    {path: 'professors', component: ProfessorsListComponent },
    {path: 'students', component: StudentsListComponent},
    {path: 'library', component: LibraryListItemsComponent},
    {path: 'workers', component: WorkersListsComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
  export const RoutingComponents = [DashboardComponent,
    StudentsListComponent, ProfessorsListComponent, SignInComponent,
    SignUpComponent,LibraryListItemsComponent, WorkersListsComponent,
    DepartmentsListComponent, LibraryListItemsComponent, 
    StudentsListComponent, WorkersListsComponent
]