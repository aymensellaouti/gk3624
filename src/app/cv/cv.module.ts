import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ItemCvComponent } from './item-cv/item-cv.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CvRoutingModule } from './cv-routing.module';



@NgModule({
  declarations: [
    CvComponent,
    ItemCvComponent,
    ListCvComponent,
    CvCardComponent,
    EmbaucheComponent,
    DetailsCvComponent,
    AddCvComponent,
    DefaultImagePipe,
  ],
  imports: [CommonModule, ReactiveFormsModule, CvRoutingModule],
})
export class CvModule {}
