import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AutomaticLoginGuard } from '../guards/automatic-login.guard';

//In here we asure that unauthorized user are send back to login page
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [
  {
    /* Changing the "tabs/tab1" on redirectTo to "login" we make sure that 
    the default page visited is the LOGIN screen */
    path: '',
    loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [AutomaticLoginGuard]
  }
  ,
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        canActivate: [AngularFireAuthGuard],
        data: {redirectUnauthorizedToLogin},
        children:
        [
          {
          path:'',
          loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
          ,
          {// With this we make sure that the activitydetail page is mantained even when clicking on TAB2 or TAB3
          // also the footer tabs are reachable when we go from HOME PAGE to BIKETOURS DETAIL page
          path: 'biketour-detail/:biketourID', //variable as a placeholder to hold the ID value
          loadChildren: () => import('../pages/biketour-detail/biketour-detail.module').then( m => m.BiketourDetailPageModule)
          }
          ,
          {// With this we make sure that the tourismdetail page is mantained even when clicking on TAB2 or TAB3
          // also the footer tabs are reachable when we go from HOME PAGE to TOURISM DETAIL page
          path: 'tourism-detail/:tourismID', //variable as a placeholder to hold the ID value
          loadChildren: () => import('../pages/tourism-detail/tourism-detail.module').then( m => m.TourismDetailPageModule)
          }
          ,
          {// With this we make sure that the eventdetail page is mantained even when clicking on TAB2 or TAB3
          // also the footer tabs are reachable when we go from HOME PAGE to EVENT DETAIL page
          path: 'event-detail/:eventID', //variable as a placeholder to hold the ID value
          loadChildren: () => import('../pages/event-detail/event-detail.module').then( m => m.EventDetailPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        canActivate: [AngularFireAuthGuard],
        data: {redirectUnauthorizedToLogin},
        children: 
        [
          {
            path:'',
            loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
          ,
          {
            path:'product-detail/:id',
            loadChildren: () => import('../pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
          }
          ,
          {
            path: 'checkout',
            loadChildren: () => import('../pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
          }
          ,
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          }
        ]
      },
      /* {
        path:'product-detail',
        loadChildren: () => import('../pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
      }
      ,
      {
        path:'product-detail/:id',
        loadChildren: () => import('../pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
      }
      , */
      {
        path: 'tab3',
        canActivate: [AngularFireAuthGuard],
        data: {redirectUnauthorizedToLogin},
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  /*
  {
    Changing the "tabs/tab1" on redirectTo to "login" we make sure that 
    the default page visited is the LOGIN screen 
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
    
    path: 'cart-modal',
    loadChildren: () => import('../pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  }
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
