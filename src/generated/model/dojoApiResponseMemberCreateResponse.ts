import type { DojoApiErrorResponse } from "./dojoApiErrorResponse";
/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { MemberCreateResponse } from "./memberCreateResponse";

export interface DojoApiResponseMemberCreateResponse {
  data?: MemberCreateResponse;
  error?: DojoApiErrorResponse;
  success: boolean;
}