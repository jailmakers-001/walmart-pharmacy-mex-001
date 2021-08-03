import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { StoreGuard } from './guards/store.guard';
import { NoStoreGuard } from './guards/no-store.guard';
import { ShoppingBasketGuard } from './guards/shopping-basket.guard';
import { PatGuard } from './guards/pat.guard';
import { HomeComponent } from './components/home/home.component';
import { DeterminantComponent } from './components/determinant/determinant.component'

const routes: Routes = [
  { 
    path: '', 
    canActivate: [NoStoreGuard], 
    component: DeterminantComponent
  },
  { 
    path: 'home', 
    canActivate: [StoreGuard], 
    component: HomeComponent 
  },
  { 
    path: 'spoke-hub', 
    canActivate: [StoreGuard], 
    loadChildren: () => import('./components/spoke-hub/spoke-hub.module')
      .then(m => m.SpokeHubModule) 
  },
  { 
    path: 'report-health-manager',
    canActivate: [StoreGuard], 
    loadChildren: () => import('./components/report-health-manager/report-health-manager.module')
      .then(m => m.ReportHealthManagerModule) 
  },
  { 
    path: 'localizador',
    canActivate: [StoreGuard], 
    loadChildren: () => import('./components/locator/locator.module')
      .then(m => m.LocatorModule) 
  },
  { 
    path: 'productos',
    canActivate: [StoreGuard], 
    loadChildren: () => import('./components/products/products.module')
      .then(m => m.ProductsModule) 
  },
  { 
    path: 'pat',
    canActivate: [StoreGuard, PatGuard], 
    loadChildren: () => import('./components/pat/pat.module')
      .then(m => m.PatModule) 
  },
  { 
    path: 'promociones',
    canActivate: [StoreGuard], 
    loadChildren: () => import('./components/promotions/promotions.module')
      .then(m => m.PromotionsModule) 
  },
  { 
    path: 'shopping-basket', 
    canActivate: [StoreGuard, ShoppingBasketGuard], 
    loadChildren: () => import('./components/shopping-basket/shopping-basket/shopping-basket.module')
      .then(m => m.ShoppingBasketModule) 
  },
  { 
    path: 'institutional-recipe', 
    canActivate: [StoreGuard], 
    loadChildren: () => import('./components/institutional-recipe/institutional-recipe.module')
      .then(m => m.InstitutionalRecipeModule) 
  },
  { 
    path: 'batch-expiration', 
    canActivate: [StoreGuard], 
    loadChildren: () => import('@components/batch-expiration-container/module/batch-expiration-container.module')
      .then(m => m.BatchExpirationContainerModule) 
  },
  { 
    path: '**', pathMatch: 'full', redirectTo: ''
   }
];

@NgModule({
  imports: [RouterModule.forRoot( routes, {
      useHash:true,
      onSameUrlNavigation:'reload',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
