import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'atb', loadChildren: './atb/atb.module#AtbPageModule' },
  { path: 'pln', loadChildren: './pln/pln.module#PlnPageModule' },
  { path: 'detail-pembayaran', loadChildren: './detail-pembayaran/detail-pembayaran.module#DetailPembayaranPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
