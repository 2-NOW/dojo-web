/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { QuestionCreateRequest } from './questionCreateRequest';

/**
 * 질문 등록 bulk 요청
 */
export interface QuestionBulkCreateRequest {
  /** 질문 요청 list */
  questionList: QuestionCreateRequest[];
}
