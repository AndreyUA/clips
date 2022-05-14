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

  selectTad(tab: TabComponent): boolean {
    this.tabs.forEach((tabComponent) => (tabComponent.active = false));

    tab.active = true;

    return false;
  }

  calculateStyles(active: boolean): string {
    return active
      ? 'hover:text-white text-white bg-indigo-400'
      : 'hover:text-indigo-400';
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (!activeTabs || activeTabs.length === 0) this.selectTad(this.tabs.first);
  }
}
