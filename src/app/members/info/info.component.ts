import { Member } from './../member';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() member: Member;

  constructor() { }

  ngOnInit() {
  }

}
