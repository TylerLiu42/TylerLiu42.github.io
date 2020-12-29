import { Component, OnInit } from '@angular/core';
import {Experience} from "../models/experiences.model";
import { experiencesData } from "../../app/experiences/experiencesData";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  experiences: Experience[] = experiencesData; 

  constructor() { }

  ngOnInit(): void {
    
  }

}
