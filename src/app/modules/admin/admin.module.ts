import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AstromanageComponent } from './astromanage/astromanage.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { AstropaymentComponent } from './astropayment/astropayment.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';


@NgModule({
  declarations: [AdminDashboardComponent, AstromanageComponent, UserManageComponent, AstropaymentComponent, UserPaymentComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
