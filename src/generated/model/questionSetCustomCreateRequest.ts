/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { QuestionId } from './questionId';

/**
 * 커스텀 질문지 세트 생성 요청
 */
export interface QuestionSetCustomCreateRequest {
  /** 질문지 세트를 발행할 시각 */
  publishedAt: string;
  /**
   * 질문지 세트를 구성할 질문 id List
   * @minItems 12
   * @maxItems 12
   */
  questionIds: QuestionId[];
}
