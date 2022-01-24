import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index6',
  templateUrl: './index6.component.html',
  styleUrls: ['./index6.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .dark-modal .modal-content {
    background-color: #000000;
    color: white;
    background: none;
    border: none;
  }
  .dark-modal .modal-header {
    border : none
  }
  .dark-modal .close {
    color: white;
  }
  .dark-modal .modal-dialog {
    max-width: 800px
  }
`]
})
/**
 * Index-6 component
 */
export class Index6Component implements OnInit {

  currentSection = 'home';

  constructor(private modalService: NgbModal) { }

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

  /**
   * Open modal for show the video
   * @param content content of modal
   */
  openWindowCustomClass(videocontent) {
    this.modalService.open(videocontent, { windowClass: 'dark-modal', centered: true });
  }
}
