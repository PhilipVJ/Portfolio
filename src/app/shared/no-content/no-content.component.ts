import {Component, OnInit} from '@angular/core';
import {faToolbox} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.css']
})
export class NoContentComponent implements OnInit {
  toolboxIcon = faToolbox;

  constructor() {
  }

  ngOnInit() {
  }

}
