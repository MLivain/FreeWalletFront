import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hrefHome?:string;
  textHome?:string;
  hrefPageUne?:string;
  textPageUne?:string;

  constructor() { }

  ngOnInit(): void {
    this.hrefHome="/";
    this.textHome="Accueil";
    this.hrefPageUne = "/anotherPage";
    this.textPageUne = "Une autre page";
  }

}
