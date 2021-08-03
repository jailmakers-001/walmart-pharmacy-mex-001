import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsContainer } from './products.container';
import { ProductsResolver } from './products.resolver';
import { SuggestResolver } from './suggest.resolver';

const routes: Routes = [{
  path: '',
  component: ProductsContainer,
  resolve: { products: ProductsResolver },
  runGuardsAndResolvers: 'always'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductsResolver]
})
export class ProductsRoutingModule { }
