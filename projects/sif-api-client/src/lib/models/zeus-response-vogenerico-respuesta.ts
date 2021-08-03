/* tslint:disable */
import { BusinessResponseVOGenericoRespuesta } from './business-response-vogenerico-respuesta';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOGenericoRespuesta {
  businessResponse?: BusinessResponseVOGenericoRespuesta;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
