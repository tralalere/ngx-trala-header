import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-trala-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    startAnimation: Boolean = false;
    constructor() { }

    ngOnInit() {
    }

    toggleNav() {
        this.startAnimation = !this.startAnimation;
    }

}
