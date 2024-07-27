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
import type { DojoApiResponseString } from ".././model";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * Sample API 입니다요
 * @summary Sample API
 */
export const test = (
  id: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<DojoApiResponseString>(
    {
      url: `http://dojo-backend-eb-env.eba-33qhzuax.ap-northeast-2.elasticbeanstalk.com/test/${id}`,
      method: "GET",
      signal,
    },
    options,
  );
};

export const getTestQueryKey = (id: string) => {
  return [
    `http://dojo-backend-eb-env.eba-33qhzuax.ap-northeast-2.elasticbeanstalk.com/test/${id}`,
  ] as const;
};

export const getTestQueryOptions = <
  TData = Awaited<ReturnType<typeof test>>,
  TError = ErrorType<unknown>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof test>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getTestQueryKey(id);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof test>>> = ({
    signal,
  }) => test(id, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<Awaited<ReturnType<typeof test>>, TError, TData> & {
    queryKey: QueryKey;
  };
};

export type TestQueryResult = NonNullable<Awaited<ReturnType<typeof test>>>;
export type TestQueryError = ErrorType<unknown>;

/**
 * @summary Sample API
 */
export const useTest = <
  TData = Awaited<ReturnType<typeof test>>,
  TError = ErrorType<unknown>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof test>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getTestQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};