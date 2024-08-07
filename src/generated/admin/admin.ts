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
  DojoApiResponseListQuestionId,
  DojoApiResponseQuestionId,
  DojoApiResponseQuestionSetId,
  QuestionBulkCreateRequest,
  QuestionCreateRequest,
  QuestionSetCustomCreateRequest
} from '.././model'
import { customInstance } from '../../apis/custom-client';
import type { ErrorType, BodyType } from '../../apis/custom-client';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * 질문을 생성합니다(admin용). 성공적으로 생성되면 생성된 질문의 UUID 를 반환합니다.
 * @summary create Question API
 */
export const createQuestion = (
    questionCreateRequest: BodyType<QuestionCreateRequest>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<DojoApiResponseQuestionId>(
      {url: `https://docker-ecs.net/admin/question`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: questionCreateRequest
    },
      options);
    }
  


export const getCreateQuestionMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createQuestion>>, TError,{data: BodyType<QuestionCreateRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof createQuestion>>, TError,{data: BodyType<QuestionCreateRequest>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createQuestion>>, {data: BodyType<QuestionCreateRequest>}> = (props) => {
          const {data} = props ?? {};

          return  createQuestion(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateQuestionMutationResult = NonNullable<Awaited<ReturnType<typeof createQuestion>>>
    export type CreateQuestionMutationBody = BodyType<QuestionCreateRequest>
    export type CreateQuestionMutationError = ErrorType<unknown>

    /**
 * @summary create Question API
 */
export const useCreateQuestion = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createQuestion>>, TError,{data: BodyType<QuestionCreateRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof createQuestion>>,
        TError,
        {data: BodyType<QuestionCreateRequest>},
        TContext
      > => {

      const mutationOptions = getCreateQuestionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * 질문지 bulk 생성(admin용). 성공적으로 생성되면 생성된 질문의 UUID List를 반환합니다.
 * @summary bulk create Question API
 */
export const bulkCreateQuestion = (
    questionBulkCreateRequest: BodyType<QuestionBulkCreateRequest>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<DojoApiResponseListQuestionId>(
      {url: `https://docker-ecs.net/admin/question-bulk`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: questionBulkCreateRequest
    },
      options);
    }
  


export const getBulkCreateQuestionMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof bulkCreateQuestion>>, TError,{data: BodyType<QuestionBulkCreateRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof bulkCreateQuestion>>, TError,{data: BodyType<QuestionBulkCreateRequest>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof bulkCreateQuestion>>, {data: BodyType<QuestionBulkCreateRequest>}> = (props) => {
          const {data} = props ?? {};

          return  bulkCreateQuestion(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type BulkCreateQuestionMutationResult = NonNullable<Awaited<ReturnType<typeof bulkCreateQuestion>>>
    export type BulkCreateQuestionMutationBody = BodyType<QuestionBulkCreateRequest>
    export type BulkCreateQuestionMutationError = ErrorType<unknown>

    /**
 * @summary bulk create Question API
 */
export const useBulkCreateQuestion = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof bulkCreateQuestion>>, TError,{data: BodyType<QuestionBulkCreateRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof bulkCreateQuestion>>,
        TError,
        {data: BodyType<QuestionBulkCreateRequest>},
        TContext
      > => {

      const mutationOptions = getBulkCreateQuestionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * QuestionSet 자체 생성
 * @summary create custom QuestionSet API
 */
export const createCustomQuestionSet = (
    questionSetCustomCreateRequest: BodyType<QuestionSetCustomCreateRequest>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<DojoApiResponseQuestionSetId>(
      {url: `https://docker-ecs.net/admin/custom-question-set`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: questionSetCustomCreateRequest
    },
      options);
    }
  


export const getCreateCustomQuestionSetMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createCustomQuestionSet>>, TError,{data: BodyType<QuestionSetCustomCreateRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof createCustomQuestionSet>>, TError,{data: BodyType<QuestionSetCustomCreateRequest>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createCustomQuestionSet>>, {data: BodyType<QuestionSetCustomCreateRequest>}> = (props) => {
          const {data} = props ?? {};

          return  createCustomQuestionSet(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateCustomQuestionSetMutationResult = NonNullable<Awaited<ReturnType<typeof createCustomQuestionSet>>>
    export type CreateCustomQuestionSetMutationBody = BodyType<QuestionSetCustomCreateRequest>
    export type CreateCustomQuestionSetMutationError = ErrorType<unknown>

    /**
 * @summary create custom QuestionSet API
 */
export const useCreateCustomQuestionSet = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createCustomQuestionSet>>, TError,{data: BodyType<QuestionSetCustomCreateRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof createCustomQuestionSet>>,
        TError,
        {data: BodyType<QuestionSetCustomCreateRequest>},
        TContext
      > => {

      const mutationOptions = getCreateCustomQuestionSetMutationOptions(options);

      return useMutation(mutationOptions);
    }
    