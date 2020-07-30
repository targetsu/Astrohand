import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstrologerRoutingModule } from './astrologer-routing.module';
import { AstroDashboardComponent } from './astro-dashboard/astro-dashboard.component';


@NgModule({
  declarations: [AstroDashboardComponent],
  imports: [
    CommonModule,
    AstrologerRoutingModule
  ]
})
export class AstrologerModule { }
