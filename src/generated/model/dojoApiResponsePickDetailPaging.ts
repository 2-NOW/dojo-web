/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { PickDetailPaging } from './pickDetailPaging';
import type { DojoApiErrorResponse } from './dojoApiErrorResponse';

export interface DojoApiResponsePickDetailPaging {
  data?: PickDetailPaging;
  error?: DojoApiErrorResponse;
  success: boolean;
}
