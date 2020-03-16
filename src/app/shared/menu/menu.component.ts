import {Component, OnInit} from '@angular/core';
import {ApplicationService} from '../services/application.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  chosenMenu: string;



  constructor(private applicationService: ApplicationService) {
    applicationService.navState.subscribe(result => this.chosenMenu = result);
  }

  ngOnInit() {

  }

}
