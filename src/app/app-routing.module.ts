import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  // {path:'login', component: LoginComponent},
  // {path:'chat', component: ChatComponent}

  {path:'login', loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)},
  {path:'chat', loadChildren: () => import('./chat/chat.module').then(m=>m.ChatModule), canActivate: [AuthGuardService]},
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
