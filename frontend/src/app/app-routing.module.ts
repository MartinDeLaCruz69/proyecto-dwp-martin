import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { PrivateTasksComponent } from './private-tasks/private-tasks.component';


const routes: Routes = [
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent},
  {path:'home', component: HomeComponent},
  {path:'tasks', component: TasksComponent},
  {path:'private-tasks', component: PrivateTasksComponent},
  {
    path:'',
    redirectTo: '/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
