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
  DojoApiResponseMemberCreateResponse,
  DojoApiResponseMemberLoginResponse,
  DojoApiResponseMemberProfileResponse,
  DojoApiResponseMemberUpdateResponse,
  DojoApiResponseMyProfileResponse
} from '.././model'

export const getCreateResponseMock = (overrideResponse: Partial< DojoApiResponseMemberCreateResponse > = {}): DojoApiResponseMemberCreateResponse => ({data: faker.helpers.arrayElement([{id: faker.word.sample()}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getLoginResponseMock = (overrideResponse: Partial< DojoApiResponseMemberLoginResponse > = {}): DojoApiResponseMemberLoginResponse => ({data: faker.helpers.arrayElement([{authToken: faker.word.sample(), id: faker.word.sample()}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getUpdateResponseMock = (overrideResponse: Partial< DojoApiResponseMemberUpdateResponse > = {}): DojoApiResponseMemberUpdateResponse => ({data: faker.helpers.arrayElement([{id: faker.word.sample()}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getGetProfileResponseMock = (overrideResponse: Partial< DojoApiResponseMemberProfileResponse > = {}): DojoApiResponseMemberProfileResponse => ({data: faker.helpers.arrayElement([{friendCount: faker.number.int({min: undefined, max: undefined}), isFriend: faker.datatype.boolean(), memberId: faker.word.sample(), memberName: faker.word.sample(), ordinal: faker.number.int({min: undefined, max: undefined}), pickCount: faker.number.int({min: undefined, max: undefined}), platform: faker.word.sample(), profileImageUrl: faker.word.sample()}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getGetProfileMockResponseMock = (overrideResponse: Partial< DojoApiResponseMemberProfileResponse > = {}): DojoApiResponseMemberProfileResponse => ({data: faker.helpers.arrayElement([{friendCount: faker.number.int({min: undefined, max: undefined}), isFriend: faker.datatype.boolean(), memberId: faker.word.sample(), memberName: faker.word.sample(), ordinal: faker.number.int({min: undefined, max: undefined}), pickCount: faker.number.int({min: undefined, max: undefined}), platform: faker.word.sample(), profileImageUrl: faker.word.sample()}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getMeResponseMock = (overrideResponse: Partial< DojoApiResponseMyProfileResponse > = {}): DojoApiResponseMyProfileResponse => ({data: faker.helpers.arrayElement([{coinCount: faker.number.int({min: undefined, max: undefined}), friendCount: faker.number.int({min: undefined, max: undefined}), memberId: faker.word.sample(), memberName: faker.word.sample(), ordinal: faker.number.int({min: undefined, max: undefined}), pickCount: faker.number.int({min: undefined, max: undefined}), platform: faker.word.sample(), profileImageUrl: faker.word.sample()}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})


export const getCreateMockHandler = (overrideResponse?: DojoApiResponseMemberCreateResponse | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<DojoApiResponseMemberCreateResponse> | DojoApiResponseMemberCreateResponse)) => {
  return http.post('https://docker-ecs.net/public/member', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getCreateResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getLoginMockHandler = (overrideResponse?: DojoApiResponseMemberLoginResponse | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<DojoApiResponseMemberLoginResponse> | DojoApiResponseMemberLoginResponse)) => {
  return http.post('https://docker-ecs.net/public/member-login', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getLoginResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getUpdateMockHandler = (overrideResponse?: DojoApiResponseMemberUpdateResponse | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<DojoApiResponseMemberUpdateResponse> | DojoApiResponseMemberUpdateResponse)) => {
  return http.patch('https://docker-ecs.net/member/:id', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getUpdateResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getGetProfileMockHandler = (overrideResponse?: DojoApiResponseMemberProfileResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<DojoApiResponseMemberProfileResponse> | DojoApiResponseMemberProfileResponse)) => {
  return http.get('https://docker-ecs.net/member/:memberId', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProfileResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getGetProfileMockMockHandler = (overrideResponse?: DojoApiResponseMemberProfileResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<DojoApiResponseMemberProfileResponse> | DojoApiResponseMemberProfileResponse)) => {
  return http.get('https://docker-ecs.net/member/mock/:memberId', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProfileMockResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getMeMockHandler = (overrideResponse?: DojoApiResponseMyProfileResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<DojoApiResponseMyProfileResponse> | DojoApiResponseMyProfileResponse)) => {
  return http.get('https://docker-ecs.net/member/me', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getMeResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}
export const getMemberMock = () => [
  getCreateMockHandler(),
  getLoginMockHandler(),
  getUpdateMockHandler(),
  getGetProfileMockHandler(),
  getGetProfileMockMockHandler(),
  getMeMockHandler()
]
