/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { QuestionCreateRequestType } from "./questionCreateRequestType";

/**
 * 질문 등록 요청
 */
export interface QuestionCreateRequest {
  content: string;
  emojiImageId: string;
  type: QuestionCreateRequestType;
}