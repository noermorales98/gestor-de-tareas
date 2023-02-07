import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginPageComponent } from 'src/app/modules/auth/components/login-page/login-page.component';
import { Page404Component } from 'src/app/page404/page404.component';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) 
  // },
  // {
  //   path: 'task',
  //   loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule)
  // },
  // {
  //   path: '**',
  //   component: Page404Component
  // }
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }