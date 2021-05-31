
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanEnterLoginPageGuard } from './can-enter-login-page.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  }/* ,
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [CanEnterLoginPageGuard]
  }
  ,
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  }
  /* ,
  {
    // Lazy loaded path
    // not needed anymore as this path is a CHILDPATH in the TABS-ROUTING.MODULE
    path: 'product-detail',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    // Lazy loaded path
    // not needed anymore as this path is a CHILDPATH in the TABS-ROUTING.MODULE
    path: 'biketour-detail',
    loadChildren: () => import('./pages/biketour-detail/biketour-detail.module').then( m => m.BiketourDetailPage)
  },
  {
    // Lazy loaded path
    // not needed anymore as this path is a CHILDPATH in the TABS-ROUTING.MODULE
    path: 'tourism-detail',
    loadChildren: () => import('./pages/tourism-detail/tourism-detail.module').then( m => m.TourismDetailPageModule)
  },
  {
    // Lazy loaded path
    // not needed anymore as this path is a CHILDPATH in the TABS-ROUTING.MODULE
    path: 'event-detail',
    loadChildren: () => import('./pages/event-detail/event-detail.module').then( m => m.EventDetailPageModule)
  } */
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
