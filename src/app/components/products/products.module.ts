import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsContainer } from './products.container';
import { TiledViewComponent } from './tiled-view/tiled-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { LocateViewComponent } from './locate-view/locate-view.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NegateViewComponent } from './negate-view/negate-view.component';
import { AddCartViewComponent } from './add-cart-view/add-cart-view.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from './pagination/module/pagination.module'; 
//components
import { TagsComponent } from './tags/tags.component';
import { SkeletonPlaceholderModule } from '@skeleton-placeholder/skeleton-placeholder.module';
//angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
//3-party
import { NgxScrollTopModule } from 'ngx-scrolltop';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ProductsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    DirectivesModule,
    PipesModule,
    PaginationModule,
    NgxScrollTopModule,
    SkeletonPlaceholderModule
  ],
  declarations: [
    ProductsContainer, 
    TiledViewComponent, 
    ListViewComponent, 
    DetailsViewComponent, 
    LocateViewComponent, 
    NegateViewComponent, 
    AddCartViewComponent, 
    TagsComponent
  ],
  entryComponents: [ DetailsViewComponent, LocateViewComponent ]
})
export class ProductsModule { }
