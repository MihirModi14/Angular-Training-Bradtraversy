import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];
  showAge: boolean = true;
  loaded: boolean = true;

  enableAdd: boolean = false;
  bigText: boolean = false;
  currentClasses: object = {};

  showExtended: boolean = true;
  currentStyle: object = {};

  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'Mihir',
        lastName: 'Modi',
        age: 21,
        image: 'https://picsum.photos/100/100',
        isActive: true,
        balance: 100,
        registered: new Date('06/03/2018 05:00:00'),
      },
      {
        firstName: 'Ruchit',
        lastName: 'Modi',
        age: 23,
        image: 'https://picsum.photos/100/100',
        isActive: false,
        balance: 200,
        registered: new Date('05/02/2020 10:45:00'),
      },
      {
        firstName: 'Ayush',
        lastName: 'Modi',
        age: 19,
        image: 'https://picsum.photos/100/100',
        isActive: true,
        balance: 300,
        registered: new Date('10/07/2022 09:25:00'),
      },
    ];

    this.addUser({
      firstName: 'Delsi',
      lastName: 'Modi',
      image: 'https://picsum.photos/100/100',
      isActive: false,
      balance: 400,
      registered: new Date('11/07/2015 12:15:00'),
    });

    this.setCurrentClass();
    this.setCurrentStyle();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClass() {
    this.currentClasses = {
      'btn-dark': this.enableAdd,
      'big-text': this.bigText,
    };
  }

  setCurrentStyle() {
    this.currentStyle = {
      'padding-top': this.showExtended ? '0px' : '20px',
      'font-size': this.showExtended ? '15px' : '20px',
    };
  }
}
