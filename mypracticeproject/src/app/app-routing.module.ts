import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DirectivesComponent } from './directives/directives.component';


const routes: Routes = [
{path:'',component: LandingComponent},
{path:'landing',component: LandingComponent},
{path:'login',component: LoginComponent},
{path:'signup',component: SignupComponent},
{path:'directives',component:DirectivesComponent},
{path:'student', loadChildren:()=>import ('./student/student.module').then(mod=>mod.StudentModule)}
// {path : 'student', loadChildren:()=>import ('./student/student.module').then(mod=>mod.StudentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
