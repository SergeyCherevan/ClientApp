import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  @Input() title: string = "";

  sectionStr: string = "Секції";
  timelinePageStr: string = "Стрічка послуг";
  publishPageStr: string = "Опублікувати";
  usersPageStr: string = "Користувачі";
  proposalsPageStr: string = "Пропозиції";
  messagingsPageStr: string = "Листування";

  get copyrightStr(): string {
    return `© 2022 ${this.title}, Inc. All rights reserved.`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
