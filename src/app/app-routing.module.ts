import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

const routes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    {
        path: '', component: AdminComponent, children: [
            {
                path: 'admin',
                loadChildren: './layouts/admin/admin-routing.module#AdminLayoutModule'
            },
        ]
    },
    {
        path: '', component: AdminComponent, children: [
            {
                path: 'auth',
                loadChildren: "./layouts/auth/auth-routing.module#AuthLayoutModule"
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

