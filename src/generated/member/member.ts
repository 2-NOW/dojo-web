/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import {
  useMutation
} from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult
} from '@tanstack/react-query'
import type {
  DojoApiResponseMemberCreateResponse,
  DojoApiResponseMemberLoginResponse,
  DojoApiResponseMemberUpdateResponse,
  MemberCreateRequest,
  MemberLoginRequest,
  MemberUpdateRequest
} from '.././model'
import { customInstance } from '../../apis/custom-client';
import type { ErrorType, BodyType } from '../../apis/custom-client';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * 멤버 가입 시 사용하는 API. 현재 ID 제외(auto generation) 별도의 unique 값은 없어요.
 * @summary [PUBLIC] 멤버 가입 API
 */
export const create = (
    memberCreateRequest: BodyType<MemberCreateRequest>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<DojoApiResponseMemberCreateResponse>(
      {url: `https://docker-ecs.net/public/member`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: memberCreateRequest
    },
      options);
    }
  


export const getCreateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof create>>, TError,{data: BodyType<MemberCreateRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof create>>, TError,{data: BodyType<MemberCreateRequest>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof create>>, {data: BodyType<MemberCreateRequest>}> = (props) => {
          const {data} = props ?? {};

          return  create(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateMutationResult = NonNullable<Awaited<ReturnType<typeof create>>>
    export type CreateMutationBody = BodyType<MemberCreateRequest>
    export type CreateMutationError = ErrorType<unknown>

    /**
 * @summary [PUBLIC] 멤버 가입 API
 */
export const useCreate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof create>>, TError,{data: BodyType<MemberCreateRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof create>>,
        TError,
        {data: BodyType<MemberCreateRequest>},
        TContext
      > => {

      const mutationOptions = getCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * 멤버 로그인 API, ID 값으로만 로그인하며 token을 발급받는 용도
 * @summary [PUBLIC] 멤버 로그인 API
 */
export const login = (
    memberLoginRequest: BodyType<MemberLoginRequest>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<DojoApiResponseMemberLoginResponse>(
      {url: `https://docker-ecs.net/public/member-login`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: memberLoginRequest
    },
      options);
    }
  


export const getLoginMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof login>>, TError,{data: BodyType<MemberLoginRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof login>>, TError,{data: BodyType<MemberLoginRequest>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof login>>, {data: BodyType<MemberLoginRequest>}> = (props) => {
          const {data} = props ?? {};

          return  login(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>
    export type LoginMutationBody = BodyType<MemberLoginRequest>
    export type LoginMutationError = ErrorType<unknown>

    /**
 * @summary [PUBLIC] 멤버 로그인 API
 */
export const useLogin = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof login>>, TError,{data: BodyType<MemberLoginRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof login>>,
        TError,
        {data: BodyType<MemberLoginRequest>},
        TContext
      > => {

      const mutationOptions = getLoginMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * 멤버 정보 수정 시 사용하는 API. 수정될 요소만 not-null로 받아요. null로 들어온 프로퍼티는 기존 값을 유지해요.
 * @summary 멤버 정보 갱신 API
 */
export const update = (
    id: string,
    memberUpdateRequest: BodyType<MemberUpdateRequest>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<DojoApiResponseMemberUpdateResponse>(
      {url: `https://docker-ecs.net/member/${id}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: memberUpdateRequest
    },
      options);
    }
  


export const getUpdateMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof update>>, TError,{id: string;data: BodyType<MemberUpdateRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof update>>, TError,{id: string;data: BodyType<MemberUpdateRequest>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof update>>, {id: string;data: BodyType<MemberUpdateRequest>}> = (props) => {
          const {id,data} = props ?? {};

          return  update(id,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UpdateMutationResult = NonNullable<Awaited<ReturnType<typeof update>>>
    export type UpdateMutationBody = BodyType<MemberUpdateRequest>
    export type UpdateMutationError = ErrorType<unknown>

    /**
 * @summary 멤버 정보 갱신 API
 */
export const useUpdate = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof update>>, TError,{id: string;data: BodyType<MemberUpdateRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof update>>,
        TError,
        {id: string;data: BodyType<MemberUpdateRequest>},
        TContext
      > => {

      const mutationOptions = getUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    