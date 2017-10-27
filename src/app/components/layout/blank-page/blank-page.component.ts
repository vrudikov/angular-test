import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank-page',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['blank-page.component.css']
})
export class BlankPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
