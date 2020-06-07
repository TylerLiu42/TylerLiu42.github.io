import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  skillsBlurbArr: string[] = this.getSkills()
  skills = {
    "Languages": ["Java", "C++", "JavaScript", "TypeScript", "Groovy", "Python"],
    "Technologies": ["Node.js", "Angular.js", "Spring Boot", "React Native", "JUnit/AssertJ"],
    "Databases": ["MySQL", "Oracle", "MongoDB"]
  }

  constructor() { }

  ngOnInit(): void {
  }

  getSkills() {
    let skills = {
      "Languages": ["Java", "C++", "Groovy"],
      "Technologies": ["Node.js", "Angular.js", "Spring Boot"],
      "Databases": ["MySQL", "Oracle", "MongoDB"]
    }
    let skillsBlurb = "";
    let skillsBlurbArr = [];
    for (let category in skills) {
      skillsBlurb = category + ": "
      for (let i = 0; i < skills[category].length; i++) {
        skillsBlurb += skills[category][i] + 
          (i == skills[category].length-1 ? "" : ", ")
      }
      skillsBlurbArr.push(skillsBlurb)
    } 
    return skillsBlurbArr
  }
}
