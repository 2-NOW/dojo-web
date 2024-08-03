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

export const getTest1ResponseMock = (): string => (faker.word.sample())


export const getTest1MockHandler = (overrideResponse?: string | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<string> | string)) => {
  return http.get('http://dojo-backend-eb-env.eba-33qhzuax.ap-northeast-2.elasticbeanstalk.com/authentication/test', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getTest1ResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}
export const getMemberAuthTokenTutorialControllerMock = () => [
  getTest1MockHandler()
]