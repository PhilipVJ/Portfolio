import { Component, OnInit } from '@angular/core';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {ProjectsService} from '../../shared/services/projects.service';
import {Project} from '../../shared/model/project';

@Component({
  selector: 'app-projectsview',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  gitHubLogo = faGithubSquare;
  downloadIcon = faDownload;
  projects: Project[];
  constructor(private projectsService: ProjectsService) {
    this.projects = projectsService.getProject();
  }

  ngOnInit() {
  }

}
