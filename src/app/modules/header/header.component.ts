import { Component, OnInit } from '@angular/core';

export class Lang {
    public label: string;
    public icon: string;
    public active?: Boolean;

    constructor() {
    }
}
@Component({
    selector: 'app-trala-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    startAnimation: Boolean = false;
    currentLanguage: string;
    change: Boolean = false;
    active: Boolean = false;
    langs: Array<Lang> = new Array();
    langsActive: Array<Lang> = new Array();

    constructor() { }

    toggleNavBar() {
        this.change = !this.change;
    }
    toggleNav() {
        this.startAnimation = !this.startAnimation;
    }
    toggleLang() {
        this.active = !this.active;
    }
    ngOnInit() {

        this.langs.push({label: 'fr', icon: 'https://www.tralalere.com/header/images/fr.svg'},
            {label: 'en', icon: 'https://www.tralalere.com/header/images/en.svg'});

        this.currentLanguage = 'fr';

        for (const entry of this.langs) {
            if (entry['label'] == this.currentLanguage) {
                entry.active = true;
            } else {
                entry.active = false;
            }
            this.langsActive = this.langs
                .filter((book: Lang) => book.active === true);

        }


    }

    changeLanguage(lang: Lang) {
        console.log(lang);
        console.log(this.langs);
        for (const entry of this.langs) {
            entry.active = false;
        }
        lang['active'] = true;

        this.langsActive = this.langs
            .filter((book: Lang) => book.active === true);
        //this.translate.use(lang['label']);
    }

}
