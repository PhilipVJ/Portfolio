import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../shared/services/application.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.applicationService.setNavBarState('about');
  }

}
