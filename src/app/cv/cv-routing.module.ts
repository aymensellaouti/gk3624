import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "../auth/guards/auth.guard";
import { LoginComponent } from "../auth/login/login.component";
import { APP_ROUTES } from "../config/routes.config";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsCvComponent } from "./details-cv/details-cv.component";

export const CV_ROUTING: Routes = [
  { path: APP_ROUTES.login, component: LoginComponent },
  { path: APP_ROUTES.cv, component: CvComponent },
  {
    path: APP_ROUTES.cv + '/add',
    component: AddCvComponent,
    canActivate: [authGuard],
  },
  { path: APP_ROUTES.cv + '/:id', component: DetailsCvComponent },
];

@NgModule({
  imports: [RouterModule.forChild(CV_ROUTING)],
  exports: [RouterModule]
})
export class CvRoutingModule {}
