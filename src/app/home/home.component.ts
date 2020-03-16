import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../shared/services/application.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.applicationService.setNavBarState('home');
  }

}
