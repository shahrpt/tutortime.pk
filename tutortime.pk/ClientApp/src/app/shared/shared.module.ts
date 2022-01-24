import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollspyDirective } from './scrollspy.directive';
import { FeatherModule } from 'angular-feather';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountToModule } from 'angular-count-to';
import {
  Grid, Edit, Headphones, Layers, Code, Tablet, BarChart2, Check, PieChart, ArrowRight, Bookmark, Coffee, Award,
  UserPlus, MapPin, Mail, Phone
} from 'angular-feather/icons';

const icons = {
  Grid, Edit, Headphones, Layers, Code, Tablet, BarChart2, Check, PieChart, ArrowRight, Bookmark,
  UserPlus, Coffee, Award, MapPin, Mail, Phone
};

import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { ClientsComponent } from './clients/clients.component';
import { PlansComponent } from './plans/plans.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ServicesComponent, FeaturesComponent, ClientsComponent, PlansComponent, FooterComponent, ScrollspyDirective],
  imports: [
    CommonModule, FeatherModule.pick(icons), CarouselModule, CountToModule
  ],
  exports: [ServicesComponent, FeaturesComponent, ClientsComponent, PlansComponent, FooterComponent, ScrollspyDirective, FeatherModule],
})
export class SharedModule { }
