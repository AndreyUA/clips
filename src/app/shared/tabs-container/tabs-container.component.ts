import {
  Component,
  OnInit,
  ContentChildren,
  AfterContentInit,
  QueryList,
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

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.tabs);
  }
}
