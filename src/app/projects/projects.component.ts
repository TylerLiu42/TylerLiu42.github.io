import { Component, OnInit } from '@angular/core';
import { Project } from '../models/projects.model';
import { projectsData } from '../projects/projectsData'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = projectsData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
