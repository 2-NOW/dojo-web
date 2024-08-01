/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import { useQuery } from "@tanstack/react-query";
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { customInstance } from "../../apis/custom-client";
import type { ErrorType } from "../../apis/custom-client";
import type { DojoApiResponseCurrentCoinResponse } from ".././model";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * 유저의 현재 남은 코인 정보를 조회합니다
 * @summary 본인의 현재 코인을 조회합니다.
 */
export const getCurrentCoin = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<DojoApiResponseCurrentCoinResponse>(
    {
      url: `http://dojo-backend-eb-env.eba-33qhzuax.ap-northeast-2.elasticbeanstalk.com/coin`,
      method: "GET",
      signal,
    },
    options,
  );
};

export const getGetCurrentCoinQueryKey = () => {
  return [
    `http://dojo-backend-eb-env.eba-33qhzuax.ap-northeast-2.elasticbeanstalk.com/coin`,
  ] as const;
};

export const getGetCurrentCoinQueryOptions = <
  TData = Awaited<ReturnType<typeof getCurrentCoin>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getCurrentCoin>>, TError, TData>
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetCurrentCoinQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getCurrentCoin>>> = ({
    signal,
  }) => getCurrentCoin(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getCurrentCoin>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetCurrentCoinQueryResult = NonNullable<
  Awaited<ReturnType<typeof getCurrentCoin>>
>;
export type GetCurrentCoinQueryError = ErrorType<unknown>;

/**
 * @summary 본인의 현재 코인을 조회합니다.
 */
export const useGetCurrentCoin = <
  TData = Awaited<ReturnType<typeof getCurrentCoin>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getCurrentCoin>>, TError, TData>
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetCurrentCoinQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};
