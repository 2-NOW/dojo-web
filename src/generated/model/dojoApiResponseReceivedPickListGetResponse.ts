/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { ReceivedPickListGetResponse } from './receivedPickListGetResponse';
import type { DojoApiErrorResponse } from './dojoApiErrorResponse';

export interface DojoApiResponseReceivedPickListGetResponse {
  data?: ReceivedPickListGetResponse;
  error?: DojoApiErrorResponse;
  success: boolean;
}
