import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AstromanageComponent } from './astromanage/astromanage.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { AstropaymentComponent } from './astropayment/astropayment.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';

const routes: Routes = [ 
  {
  path:'dash',
  component:AdminDashboardComponent,
  },
  {
    path:'astromanage',
    component:AstromanageComponent,
  },
  {
    path:'usermanage',
    component:UserManageComponent,
  },
  {
    path:'astropay',
    component:AstropaymentComponent,
  },
  {
    path:'userpay',
    component:UserPaymentComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
