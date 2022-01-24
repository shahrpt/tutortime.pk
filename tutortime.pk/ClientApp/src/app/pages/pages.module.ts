import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { Index1Component } from './index1/index1.component';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { Index4Component } from './index4/index4.component';
import { Index5Component } from './index5/index5.component';
import { Index6Component } from './index6/index6.component';

@NgModule({
  declarations: [Index1Component, Index2Component, Index3Component, Index4Component, Index5Component, Index6Component],
  imports: [
    CommonModule, ScrollToModule.forRoot(), PagesRoutingModule, SharedModule, NgbModalModule, NgxYoutubePlayerModule
  ]
})
export class PagesModule { }
