import {
  Component,
  OnInit,
  ContentChildren,
  AfterContentInit,
} from '@angular/core';

// Components
import { TabComponent } from 'src/app/shared/tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss'],
})
export class TabsContainerComponent implements OnInit, AfterContentInit {
  constructor() {}

  @ContentChildren(TabComponent) tabs = {};

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.tabs);
  }
}
