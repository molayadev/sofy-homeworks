import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sofia Colegio';
  showNav = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('SHOW-NAV', this.showNav)
        this.showNav = this.activatedRoute.firstChild.snapshot.data.showNav !== false;
      }
    });
  }
}
