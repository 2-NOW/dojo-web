/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  QuestionSheetsGetResponse
} from '.././model'

export const getGetQuestionSheetResponseMock = (overrideResponse: Partial< QuestionSheetsGetResponse > = {}): QuestionSheetsGetResponse => ({questionSetId: faker.word.sample(), questionSheetList: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({candidates: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({memberId: faker.word.sample(), memberName: faker.word.sample(), platform: faker.word.sample()})), questionCategory: faker.word.sample(), questionContent: faker.word.sample(), questionEmojiImageUrl: faker.word.sample(), questionId: faker.word.sample(), questionOrder: faker.number.int({min: undefined, max: undefined}), questionSheetId: faker.word.sample(), resolverId: faker.word.sample()})), resolverId: faker.word.sample(), sheetTotalCount: faker.number.int({min: undefined, max: undefined}), startingQuestionIndex: faker.number.int({min: undefined, max: undefined}), ...overrideResponse})


export const getGetQuestionSheetMockHandler = (overrideResponse?: QuestionSheetsGetResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<QuestionSheetsGetResponse> | QuestionSheetsGetResponse)) => {
  return http.get('https://docker-ecs.net/question', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetQuestionSheetResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}
export const getQuestionMock = () => [
  getGetQuestionSheetMockHandler()
]
