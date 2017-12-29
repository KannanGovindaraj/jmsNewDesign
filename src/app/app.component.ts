import { Component, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobileQuery: MediaQueryList;

  fillerNav = [
    {"navText": "Home", "navIcon": "home"},
    {"navText": "Dashboard", "navIcon": "dashboard"},
    {"navText": "Profile", "navIcon": "person"},
    {"navText": "Retail Shop", "navIcon": "add_shopping_cart"},
    {"navText": "Advertisement", "navIcon": "tv"},
    {"navText": "Top-Up", "navIcon": "add_box"},
    {"navText": "E-Wallet", "navIcon": "account_balance_wallet"},
    {"navText": "Report", "navIcon": "show_chart"}
  ]
  userList = [
     {"name": "Kannan", "views": "12", "comments": "14"},
     {"name": "Creative Mints", "views": "22", "comments": "124"},
     {"name": "Creativedash", "views": "122", "comments": "44"},
     {"name": "Nick Kumbari", "views": "32", "comments": "14"},
     {"name": "Kennady", "views": "12", "comments": "06"},
     {"name": "John", "views": "15", "comments": "32"},
     {"name": "Michael", "views": "41", "comments": "21"},
     {"name": "Joseph", "views": "11", "comments": "10"},
     {"name": "David", "views": "11", "comments": "119"},
  ]

  fillerContent = Array(10).fill(0).map(() =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private elementRef: ElementRef, private renderer: Renderer2) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit(): void {
    const listItems = this.elementRef.nativeElement.querySelectorAll('.mat-list-item-content') as HTMLElement[];
    listItems.forEach(listItem => {
      this.renderer.setStyle(listItem, 'padding', '3px');
      this.renderer.setStyle(listItem, 'font-size', '14px');
    });
  }
}
