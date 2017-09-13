import { Member } from './member';
import { Injectable } from '@angular/core';

@Injectable()
export class MembersService {

members: Member[] = [
  {
    name: 'John Doe',
    website: {
      name: 'johndoe.com',
      url: 'http://www.johndoe.com'
    },
    email: 'john.doe@gmail.com',
    status: 'Active'
  },
  {
    name: 'Doe John',
    website: {
      name: 'doejohn.com',
      url: 'http://www.doejohn.com'
    },
    email: 'doe_john@hotmail.com',
    status: 'Inactive'
  }
];

constructor() { }
    getMembers(): Member[] {
        return this.members;
    }

    setMembers(newMember){
      this.members.push(newMember);
    }
}
