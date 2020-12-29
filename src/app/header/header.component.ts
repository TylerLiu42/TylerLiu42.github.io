import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  Object = Object
  headerSections = {
    "About Me": "app-intro",
    "Experiences": "experiences",
    "Projects": "projects"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
