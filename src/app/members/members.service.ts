import { Member } from './member';
import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MembersService {
  private route = 'https://reqres.in/api/';

  private changedMemberSource  = new Subject<Member[]>();
  private editedMemberSource   = new Subject<Member>();

  changedMember$ = this.changedMemberSource.asObservable();
  editedMember$  = this.editedMemberSource.asObservable();

  members: Member[] = [
    // {
    //   id: 1,
    //   name: 'John Doe',
    //   website: {
    //     name: 'johndoe.com',
    //     url: 'http://www.johndoe.com'
    //   },
    //   email: 'john.doe@gmail.com',
    //   status: 'Active'
    // },
    // {
    //   id: 2,
    //   name: 'Doe John',
    //   website: {
    //     name: 'doejohn.com',
    //     url: 'http://www.doejohn.com'
    //   },
    //   email: 'doe_john@hotmail.com',
    //   status: 'Inactive'
    // }
  ];

    constructor( private http: Http ) { }

    changedMember(member: Member[]) {
        this.changedMemberSource.next(member);
    }

    editedMember(member: Member) {
        this.editedMemberSource.next(member);
    }

    updateDataSource(member: Member, members: Member[]) {
        const self = this;
        const memb = members;

        members.forEach(function(element, index, array) {
            if (element.id === member.id) {
                memb[index] = member;
                self.editedMember(member);
            }
        });

        this.changedMember(memb);
    }

    addDataSource(member: Member, members: Member[]) {
        const memb = members;
        memb.push(member);
        this.changedMember(memb);
    }

    deleteDataSource(memberId: number, members: Member[]) {
        const memb = members;
        for (let i = memb.length - 1; i >= 0; i--) {
            if (memb[i].id === memberId) {
                memb.splice(i, 1);
            }
        }

        this.changedMember(memb);
    }

    getMembers():  Observable<{}>  {
      const route = this.route.concat('users/');
      return this.http.get(route)
                 .map(this.extractData)
                 .catch(this.handleError);
    }

    setMembers(newMember: Member): Observable<{}>  {
      const route = this.route.concat('users/');
      return this.http.get(route)
                 .map(this.extractData)
                 .catch(this.handleError);
    }

    getMember(memberId: number): Observable<{}>  {
      const id = <string><any>memberId;
      const route = this.route.concat('users/').concat(id);
      return this.http.get(route)
                 .map(this.extractData)
                 .catch(this.handleError);
    }

    updateMember(member): Observable<{}>  {
      const body = JSON.stringify(member);
      const id = <string><any>member.id;
      const url = this.route.concat('users/').concat(id);

      return this.http.put(url, body)
                 .map(this.extractData)
                 .catch(this.handleError);
    }

    deleteMember(memberId: number) {
      const id = <string><any>memberId;
      const url = this.route.concat('users/').concat(id);
      return this.http.delete(url).catch(this.handleError);
    }

    extractData(res: Response): Object {
        let payload = res.json();
        if (payload.constructor === Array) {
            payload = payload.map(
                (obj) => {
                    return obj.data;
                }
            );
        }

        return payload || {};
    }

    private handleError(error: any): any {
        console.error('An error occurred', error);
        return Observable.throw(error);
    }
}
