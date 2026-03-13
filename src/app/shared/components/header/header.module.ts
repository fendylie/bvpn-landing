import { Component, OnInit } from '@angular/core';
import { NgClass, ViewportScroller } from '@angular/common';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from '../../../../environtments/environtment';
import { UiButtonModule } from '../../../core/shared/components/button/button.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink, UiButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.style.scss',
})
export class HeaderModule implements OnInit {
  menuToggle: boolean = false;
  activePathUrl: string = '/';
  dashboardUrl: string = environment.dashboardUrl;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {}

  ngOnInit() {
    this.activePathUrl = this.router.url;
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        this.activePathUrl = event.url;
      });
  }

  toggleMobileMenu() {
    this.menuToggle = !this.menuToggle;
  }

  closeMenu() {
    this.menuToggle = false;
  }

  scrollTo(section: string) {
    this.closeMenu();

    if (this.router.url !== '/') {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(section.replace('#', ''));
        }, 100); // Slight delay to ensure DOM is rendered
      });
    } else {
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(section.replace('#', ''));
      }, 0);
    }
  }
}
