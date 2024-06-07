import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { APP_ROUTES } from './config/routes.config';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guards/auth.guard';
import { CustomPreloadingStrategy } from './preloading strategies/custom.preloading-strategy';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: APP_ROUTES.login, component: LoginComponent },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule),
  },
  {
    path: APP_ROUTES.cv,
    loadChildren: () => import('./cv/cv.module').then((m) => m.CvModule),
    data: { preload: true },
  },
  { path: 'word', component: MiniWordComponent },
  { path: 'color/:defaultColor', component: ColorComponent },
  { path: 'second',
    loadComponent: () => import('./components/second/second.component').then(
      (m) => m.SecondComponent
    )
  },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
