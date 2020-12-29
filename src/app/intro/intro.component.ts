import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  listOfSkills: string[]
  skills = {
    "Languages": ["Java", "C++", "JavaScript", "TypeScript", "Groovy", "Python"],
    "Technologies": ["Node.js", "Angular.js", "Spring Boot", "React Native", "JUnit/AssertJ"],
    "Databases": ["MySQL", "Oracle", "MongoDB"]
  }

  constructor() { }

  ngOnInit(): void {
    this.listOfSkills = this.getSkills()
  }

  getSkills() {
    let categorySkills = "";
    let categorySkillsList = [];
    for (let category in this.skills) {
      categorySkills = category + ": "
      for (let i = 0; i < this.skills[category].length; i++) {
        categorySkills += this.skills[category][i] + 
          (i == this.skills[category].length-1 ? "" : ", ")
      }
      categorySkillsList.push(categorySkills)
    } 
    return categorySkillsList
  }
}
