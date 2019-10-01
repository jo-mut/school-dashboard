import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SignInComponent } from '../../registration/sign-in/sign-in.component';
import { SignUpComponent } from '../../registration/sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent}

];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [SignInComponent, SignUpComponent],
})
export class AuthLayoutModule {}
