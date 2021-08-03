import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask'
import { AppErrorHandler } from './interceptors/app-error-handler';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { SifApiClientModule } from 'sif-api-client';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatOptionModule } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from "@angular/material-moment-adapter";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistersComponent } from './components/registers/registers.component';
import { HttpClientModule } from '@angular/common/http';

//environment
import { environment } from 'environment';

// fix issue https://stackoverflow.com/questions/53231004/passing-environment-variables-to-custom-library-with-forroot
// fix issue example https://stackblitz.com/edit/angular-fvwvwn
const rootUrl = {
  rootUrl: environment.apiEndpoint
};

//material
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';

//modules
import { HomeModule } from './components/home/home.module';
import { DeterminantModule } from './components/determinant/determinant.module';
import { ScannerAnimationModule } from '@shared/scanner-animation/scanner-animation.module';
import { SwUpdateModule } from '@shared/sw-update/sw-update.module';
import { LogoHeaderModule } from '@shared/logo-header/logo-header.module';

//3-party
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerLoaderComponent,
    HeaderComponent,
    FooterComponent,
    RegistersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ToastrModule.forRoot({ enableHtml: true, preventDuplicates: true, positionClass: 'toast-top-full-width', onActivateTick: true, closeButton: true, timeOut: 4000, progressBar: true }),
    NgxMaskModule.forRoot(),
    SifApiClientModule,
    HttpClientModule,
    // ANGULAR MATERIAL MODULES
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatDialogModule,
    MatBadgeModule,
    MatSelectModule,
    // ANGULAR MATERIAL MODULES
    NgxScrollTopModule,
    HomeModule,
    SatDatepickerModule,
    SatNativeDateModule,
    DeterminantModule,
    ScannerAnimationModule,
    SwUpdateModule,
    SifApiClientModule.forRoot(rootUrl),
    LogoHeaderModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler, deps: [Injector] },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'es-Es' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [RegistersComponent]
})
export class AppModule { }