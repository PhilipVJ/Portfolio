import {Component, HostListener, OnInit} from '@angular/core';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {faUniversity} from '@fortawesome/free-solid-svg-icons';
import {faTools} from '@fortawesome/free-solid-svg-icons';
import {ProjectsService} from '../../shared/services/projects.service';
import {Project} from '../../shared/model/project';
import {BsDropdownConfig} from 'ngx-bootstrap';
import {ApplicationService} from '../../shared/services/application.service';

@Component({
  selector: 'app-projectsview',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [{provide: BsDropdownConfig, useValue: {isAnimated: true, autoClose: true}}]
})
export class ProjectsComponent implements OnInit {
  gitHubLogo = faGithubSquare;
  downloadIcon = faDownload;
  schoolIcon = faUniversity;
  toolsIcon = faTools;
  projects: Project[];
  chosenCategory: string;
  innerWidth: any;

  constructor(private projectsService: ProjectsService, private applicationService: ApplicationService) {
    // Getting all projects and setting the chosen category to all from the start
    this.chosenCategory = 'Show all';
    this.projects = projectsService.getAllProjects();
  }

  changeCategory(category: string) {
    this.chosenCategory = category;
    if (category === 'Show all') {
      this.projects = this.projectsService.getAllProjects();
    } else {
      this.projects = this.projectsService.getProjectsByCategory(category);
    }
  }

  ngOnInit() {
    this.applicationService.setNavBarState('portfolio');
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
}
