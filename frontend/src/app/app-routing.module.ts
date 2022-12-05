import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { PrivateTasksComponent } from './private-tasks/private-tasks.component';

import { AuthGuard } from "./auth.guard";
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ListarActividadComponent } from './listar-actividad/listar-actividad.component';
import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';



const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'home', component: HomeComponent},
  {path:'tasks', component: TasksComponent},
  {path:'private-tasks', component: PrivateTasksComponent, canActivate:[AuthGuard]},
  {path:'listar-usuario', component: ListarUsuarioComponent },
  {path:'crear-usuario', component: CrearUsuarioComponent},
  {path:'editar-usuario/:id', component: CrearUsuarioComponent},
  {path:'listar-actividad', component: ListarActividadComponent },
  {path:'crear-actividad', component: CrearActividadComponent},
  {path:'editar-actividad/:id', component: CrearActividadComponent},
  {path:'', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
