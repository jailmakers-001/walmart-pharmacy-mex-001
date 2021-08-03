import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, TemplateRef, ComponentFactoryResolver } from '@angular/core';
import { PharmaSearchRestImplService, PharmaSearchResponseVO } from 'sif-api-client';
import { Observable, of, Subscription } from 'rxjs';
import { map, catchError, startWith, debounceTime, switchMap, finalize } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegistersComponent } from '../registers/registers.component';
import { Router } from '@angular/router';

//enrironment
import { environment } from 'environment';

//services
import { AppService } from 'src/app/services/app.service';
import { ShoppingBasketService } from 'src/app/services/shopping-basket.service';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  public autoComplete$: Observable<PharmaSearchResponseVO> = null;
  public autoCompleteField: FormControl;
  searchFormHeader: FormGroup;
  isLoading: boolean;
  shoppingCartItems: number = 0;
  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  medicsRegistryIsActive:boolean;
  currentLetter: string;
  @ViewChild(MatAutocompleteTrigger) autocompleteTrigger: MatAutocompleteTrigger;
  determinantLogoHeader: string;
  headerLogos: string = 'assets/img/logo/determinant'
  currentTheme: string;
  patAvailable:boolean;
  showWipFeatures: boolean = environment.showWipFeatures;
  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: ViewContainerRef;
  constructor( 
    private pharma: PharmaSearchRestImplService,
    private dialog: MatDialog,
    public app: AppService,
    private router: Router,
    private shoppingCart: ShoppingBasketService,
    private headerService: HeaderService,
    private readonly componentFactoryResolver: ComponentFactoryResolver) { 
  }

  ngOnInit() {

    /**
     * validators for FormFroup
     * @author Walmart Mexico SIF Pharmacy project
    */
    this.searchFormHeader = new FormGroup({
      'autoCompleteField': new FormControl(
        null,
        [Validators.minLength(3), Validators.maxLength(100)])
    });

    /**
     * search term value
     * @author Walmart Mexico SIF Pharmacy project
    */
    this.subscription3 =
    this.headerService
      .getSearchTerm()
      .subscribe(data => this.searchFormHeader.controls.autoCompleteField.setValue(data));

    /**
     * current search letter
     * @author Walmart Mexico SIF Pharmacy project
    */
    this.subscription2 =
    this.headerService
      .getCurrentLetterValue()
      .subscribe(data => this.currentLetter = data);

    this.autoComplete$ = 
    this.searchFormHeader.controls.autoCompleteField
      .valueChanges
      .pipe(
        startWith(''),
        debounceTime(400),
        switchMap( value => {
          const searchFieldValue = this.searchFormHeader.controls.autoCompleteField.value;
          if (this.searchFormHeader.valid && searchFieldValue){
            return this.lookup(value)
          }else{
            return of(null)
          }
        })
      );
    /**
     * shopping basket items number
     * @author Walmart Mexico SIF Pharmacy project
    */
    this.subscription = 
    this.shoppingCart
      .shoppingBasketArrSize$
      .subscribe(data => this.shoppingCartItems = data);
    this.setCurrentTheme();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

  lookup(value: string): Observable<PharmaSearchResponseVO> {
    this.isLoading = true;
    return this.pharma.quickSearchPharmaUsingPOST({ substance: value }).
      pipe(
        map(response => response.businessResponse.data.infoPharma),
        catchError(() => (of(null))),
        finalize(() => this.isLoading = false)
      )
  }
  
  selectItem(product) {
    this.app.search = product;
    this.navigateToProducts();
  }

  /**
   * search by param
   * @author Walmart Mexico SIF Pharmacy project
  */
  searchByParam() {
    const searchFieldValue = this.searchFormHeader.controls.autoCompleteField.value;
    if (this.searchFormHeader.valid && searchFieldValue){
      const searchTerm = searchFieldValue;
      const searchParams = { id: null, name: searchTerm, suggest: true};
      this.app.search = searchParams;
      this.headerService.emptyCurrentLetterValue();
      this.closeAutocomplete();
      this.navigateToProducts();
    }
  }
  
  /**
   * search by alphabet letter
   * @author Walmart Mexico SIF Pharmacy project
  */
  searchByAlphabetLetter(searchParam: string) {
    if (searchParam === this.currentLetter) return;
    this.app.search = { id: 9999999 , name: searchParam };
    this.closeAutocomplete();
    this.navigateToProducts();
    this.headerService.updateCurrentLetterValue(searchParam);
    this.headerService.emptySearchTermField();
  }

  openRegister(e) {
    this.medicsRegistryIsActive = true;
    var rect = e.target.getBoundingClientRect();
    let register = this.dialog.open(RegistersComponent, {
      panelClass: 'custom-dialog-container',
      id: 'register',
      role: "alertdialog",
      width: '290px',
      height: '260px',
      hasBackdrop: false,
      position: {
        top: `10vh`,
        left: `64vw`
      }
    });
    register.afterClosed().subscribe(result => {
      this.medicsRegistryIsActive = false;
    });
  }

  /**
   * close mat autocomplete 
   * @docs https://github.com/angular/components/issues/9687
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeAutocomplete() {
    this.autocompleteTrigger.closePanel();
  }

  /**
   * navigate to products module
   * @docs https://github.com/angular/components/issues/9687
   * @author Walmart Mexico SIF Pharmacy project
  */
  navigateToProducts(){
    this.router.navigate(['/productos']);
  }
  
  /**
   * load PatComponent using dinamic imports
   * @author Walmart Mexico SIF Pharmacy project
   * @docs https://dev.to/mokkapps/manually-lazy-load-modules-and-components-in-angular-1189
  */
  lazyLoadPatComponent(){
    import('@components/pat/pat.component').then(
      ({ PatComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          PatComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }
  
  /**
   * load ReportHealthManagerComponent using dinamic imports
   * @author Walmart Mexico SIF Pharmacy project
   * @docs https://dev.to/mokkapps/manually-lazy-load-modules-and-components-in-angular-1189
  */
  lazyLoadBatchExpirationContainerComponent(){
    import('@components/batch-expiration-container/batch-expiration-container.component').then(
      ({ BatchExpirationContainerComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          BatchExpirationContainerComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }

  /**
   * load ReportHealthManagerComponent using dinamic imports
   * @author Walmart Mexico SIF Pharmacy project
   * @docs https://dev.to/mokkapps/manually-lazy-load-modules-and-components-in-angular-1189
  */
  lazyLoadReportHealthManagerComponent(){
    import('@components/report-health-manager/report-health-manager.component').then(
      ({ ReportHealthManagerComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          ReportHealthManagerComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }

  /**
   * set values for theme brand switching
   * @author Walmart Mexico SIF Pharmacy project
  */
  setCurrentTheme(){
    const determinanFormat = this.app.getDeterminantFormat();
    this.patAvailable = this.app.getPatAvailability();
    const extension = 'svg';
    this.determinantLogoHeader = `${this.headerLogos}/${determinanFormat}.${extension}`;
    this.currentTheme = `theme-${determinanFormat}`;
  }

  /**
   * download XLSX promotions file
   * @author Walmart Mexico SIF Pharmacy project
  */
  downloadFile(){
    const filePath = '../pharma_data/img/';
    const fileName = 'promociones.xlsx';
    const url = `${filePath}${fileName}`;
    window.open(url, '_blank');
  }
}
