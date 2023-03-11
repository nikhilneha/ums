import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { UnlockAccountComponent } from './unlock-account/unlock-account.component';

const routes: Routes = [
  {
    path:"home", component:HomeComponent
  },
  {
    path:"register", component:RegisterComponent
  },
  {
    path:"unlock", component:UnlockAccountComponent
  },
  {
    path:"unlockAcc", component:UnlockAccountComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"logout", component:LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
