import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';


@Component ({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    // styles: [
    //     `h1 { 
    //         color: red;
    //     }`
    // ],

})

export class userComponent implements OnInit {
    user: User;

    foo: any;
    hasKids: boolean;

    numberArr: number[];
    stringArr: string[];
    mixedArr: any[];
    myTuple: [string,number,boolean];

    constructor() {}

    ngOnInit():void {
        this.user = {
            firstName: "Mihir Modi",
            lastName: "Modi",
            age: 30,
        }

        this.foo = 2;
        this.hasKids = false;

        this.numberArr = [1,2,3];
        this.stringArr = ["Mihir","Ruchit","Ayush"];
        this.mixedArr = [1,"Mihir",null];
        this.myTuple = ["Mihir", 2, true];
    }

    sayHello() {
        console.log(`Hello, ${this.user.firstName} ${this.user.lastName}`)
    }

    hasBirthday() {
        if(this.user.age) this.user.age += 1;
    }
}