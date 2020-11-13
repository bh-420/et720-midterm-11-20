import { Component, OnInit } from "@angular/core";
import { r1 } from "../resume";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.css"]
})
export class ResumeComponent implements OnInit {
  profile = r1.profile;
  xpeience = r1.experience;
  education = r1.education;
  constructor() {}

  ngOnInit() {}
}
