import { Member } from './../member';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {
  @Output() onSubmitted: EventEmitter<Member> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(newMember) {
    this.onSubmitted.emit(newMember);
  }

}
