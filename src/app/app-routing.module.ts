import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'admin',
    loadChildren:'./modules/admin/admin.module#AdminModule'
  },
 {
   path:'astro',
   loadChildren:'./modules/astrologer/astrologer.module#AstrologerModule',
 },
 {
   path:'user',
   loadChildren:'./modules/user/user.module#UserModule',
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
