/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SifApiClientConfiguration, SifApiClientConfigurationInterface } from './sif-api-client-configuration';

import { PriceListRestService } from './services/price-list-rest.service';
import { ParticularBasketRestService } from './services/particular-basket-rest.service';
import { BitacoraRestService } from './services/bitacora-rest.service';
import { AddSurtidoValidadoRestImplService } from './services/add-surtido-validado-rest-impl.service';
import { AddTicketByFolioRestImplService } from './services/add-ticket-by-folio-rest-impl.service';
import { GetAccesoSurtirMedRestImplService } from './services/get-acceso-surtir-med-rest-impl.service';
import { ChatServiceRestService } from './services/chat-service-rest.service';
import { CloseUpRestService } from './services/close-up-rest.service';
import { CommentRestService } from './services/comment-rest.service';
import { CongoRestService } from './services/congo-rest.service';
import { CrossSaleRestService } from './services/cross-sale-rest.service';
import { DeterminantServiceRestService } from './services/determinant-service-rest.service';
import { ExternalMedicalRestService } from './services/external-medical-rest.service';
import { FlexPosRestService } from './services/flex-pos-rest.service';
import { FulfillmentRestService } from './services/fulfillment-rest.service';
import { ConsultaInstitucionRestImplService } from './services/consulta-institucion-rest-impl.service';
import { InstitutionalReportRestService } from './services/institutional-report-rest.service';
import { LoteCaducidadRestService } from './services/lote-caducidad-rest.service';
import { NearbyStoresRestService } from './services/nearby-stores-rest.service';
import { NormativeRestService } from './services/normative-rest.service';
import { OrigisRestService } from './services/origis-rest.service';
import { PatRestService } from './services/pat-rest.service';
import { PharmaSearchRestImplService } from './services/pharma-search-rest-impl.service';
import { PharmacyReportRestService } from './services/pharmacy-report-rest.service';
import { PrescriptionRestImplService } from './services/prescription-rest-impl.service';
import { PerfectPrescriptionRestService } from './services/perfect-prescription-rest.service';
import { ProductsRestService } from './services/products-rest.service';
import { ChatSaveServiceRestService } from './services/chat-save-service-rest.service';
import { AccessLogRestService } from './services/access-log-rest.service';
import { SpokeHubRestService } from './services/spoke-hub-rest.service';
import { TextPredictRestService } from './services/text-predict-rest.service';
import { PrescriptionCaptureRestImplService } from './services/prescription-capture-rest-impl.service';
import { WeeCompanyRestService } from './services/wee-company-rest.service';

/**
 * Provider for all SifApiClient services, plus SifApiClientConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    SifApiClientConfiguration,
    PriceListRestService,
    ParticularBasketRestService,
    BitacoraRestService,
    AddSurtidoValidadoRestImplService,
    AddTicketByFolioRestImplService,
    GetAccesoSurtirMedRestImplService,
    ChatServiceRestService,
    CloseUpRestService,
    CommentRestService,
    CongoRestService,
    CrossSaleRestService,
    DeterminantServiceRestService,
    ExternalMedicalRestService,
    FlexPosRestService,
    FulfillmentRestService,
    ConsultaInstitucionRestImplService,
    InstitutionalReportRestService,
    LoteCaducidadRestService,
    NearbyStoresRestService,
    NormativeRestService,
    OrigisRestService,
    PatRestService,
    PharmaSearchRestImplService,
    PharmacyReportRestService,
    PrescriptionRestImplService,
    PerfectPrescriptionRestService,
    ProductsRestService,
    ChatSaveServiceRestService,
    AccessLogRestService,
    SpokeHubRestService,
    TextPredictRestService,
    PrescriptionCaptureRestImplService,
    WeeCompanyRestService
  ],
})
export class SifApiClientModule {
  static forRoot(customParams: SifApiClientConfigurationInterface): ModuleWithProviders<SifApiClientModule> {
    return {
      ngModule: SifApiClientModule,
      providers: [
        {
          provide: SifApiClientConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
