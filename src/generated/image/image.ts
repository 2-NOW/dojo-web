/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import {
  useQuery
} from '@tanstack/react-query'
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  DojoApiResponseImageUploadUrlResponse,
  UploadInfoParams
} from '.././model'
import { customInstance } from '../../apis/custom-client';
import type { ErrorType } from '../../apis/custom-client';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * 이미지 파일을 업로드하기 위한 presigned url 과 uuid 를 반환합니다. PUT API를 통해 호출해주세요
 * @summary 단일 이미지 업로드 정보 조회 (URL, UUID)
 */
export const uploadInfo = (
    params: UploadInfoParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<DojoApiResponseImageUploadUrlResponse>(
      {url: `http://dojo-backend-eb-env.eba-33qhzuax.ap-northeast-2.elasticbeanstalk.com/image-upload-url`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getUploadInfoQueryKey = (params: UploadInfoParams,) => {
    return [`http://dojo-backend-eb-env.eba-33qhzuax.ap-northeast-2.elasticbeanstalk.com/image-upload-url`, ...(params ? [params]: [])] as const;
    }

    
export const getUploadInfoQueryOptions = <TData = Awaited<ReturnType<typeof uploadInfo>>, TError = ErrorType<unknown>>(params: UploadInfoParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof uploadInfo>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getUploadInfoQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof uploadInfo>>> = ({ signal }) => uploadInfo(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof uploadInfo>>, TError, TData> & { queryKey: QueryKey }
}

export type UploadInfoQueryResult = NonNullable<Awaited<ReturnType<typeof uploadInfo>>>
export type UploadInfoQueryError = ErrorType<unknown>

/**
 * @summary 단일 이미지 업로드 정보 조회 (URL, UUID)
 */
export const useUploadInfo = <TData = Awaited<ReturnType<typeof uploadInfo>>, TError = ErrorType<unknown>>(
 params: UploadInfoParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof uploadInfo>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getUploadInfoQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



