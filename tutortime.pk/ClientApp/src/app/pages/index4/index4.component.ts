import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index4',
  templateUrl: './index4.component.html',
  styleUrls: ['./index4.component.scss'],
})

/**
 * Index-4 component
 */
export class Index4Component implements OnInit {

  currentSection = 'home';

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }
}
