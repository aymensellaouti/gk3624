import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';


@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(

  ) {}

  ngOnInit() {
  }
}
