/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { MemberLoginResponse } from './memberLoginResponse';
import type { DojoApiErrorResponse } from './dojoApiErrorResponse';

export interface DojoApiResponseMemberLoginResponse {
  data?: MemberLoginResponse;
  error?: DojoApiErrorResponse;
  success: boolean;
}
