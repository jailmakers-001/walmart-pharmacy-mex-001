import { NgModule } from '@angular/core';
import { BatchExpirationContainerComponent } from '../batch-expiration-container.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: BatchExpirationContainerComponent }];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BatchExpirationRecipeRoutingModule { }
