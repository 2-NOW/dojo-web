/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import { useMutation } from "@tanstack/react-query";
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { customInstance } from "../../apis/custom-client";
import type { BodyType, ErrorType } from "../../apis/custom-client";
import type {
  DojoApiResponseMemberCreateResponse,
  DojoApiResponseMemberUpdateResponse,
  MemberCreateRequest,
  MemberUpdateRequest,
} from ".././model";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * 멤버 가입 시 사용하는 API. 현재 ID 제외(auto generation) 별도의 unique 값은 없어요.
 * @summary 멤버 가입 API
 */
export const create1 = (
  memberCreateRequest: BodyType<MemberCreateRequest>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<DojoApiResponseMemberCreateResponse>(
    {
      url: `http://dojo-backend-eb-env.eba-33qhzuax.ap-northeast-2.elasticbeanstalk.com/member`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: memberCreateRequest,
    },
    options,
  );
};

export const getCreate1MutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof create1>>,
    TError,
    { data: BodyType<MemberCreateRequest> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof create1>>,
  TError,
  { data: BodyType<MemberCreateRequest> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof create1>>,
    { data: BodyType<MemberCreateRequest> }
  > = (props) => {
    const { data } = props ?? {};

    return create1(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type Create1MutationResult = NonNullable<
  Awaited<ReturnType<typeof create1>>
>;
export type Create1MutationBody = BodyType<MemberCreateRequest>;
export type Create1MutationError = ErrorType<unknown>;

/**
 * @summary 멤버 가입 API
 */
export const useCreate1 = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof create1>>,
    TError,
    { data: BodyType<MemberCreateRequest> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof create1>>,
  TError,
  { data: BodyType<MemberCreateRequest> },
  TContext
> => {
  const mutationOptions = getCreate1MutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 멤버 정보 수정 시 사용하는 API. 수정될 요소만 not-null로 받아요. null로 들어온 프로퍼티는 기존 값을 유지해요.
 * @summary 멤버 정보 갱신 API
 */
export const update = (
  id: string,
  memberUpdateRequest: BodyType<MemberUpdateRequest>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<DojoApiResponseMemberUpdateResponse>(
    {
      url: `http://dojo-backend-eb-env.eba-33qhzuax.ap-northeast-2.elasticbeanstalk.com/member/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: memberUpdateRequest,
    },
    options,
  );
};

export const getUpdateMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof update>>,
    TError,
    { id: string; data: BodyType<MemberUpdateRequest> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof update>>,
  TError,
  { id: string; data: BodyType<MemberUpdateRequest> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof update>>,
    { id: string; data: BodyType<MemberUpdateRequest> }
  > = (props) => {
    const { id, data } = props ?? {};

    return update(id, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateMutationResult = NonNullable<
  Awaited<ReturnType<typeof update>>
>;
export type UpdateMutationBody = BodyType<MemberUpdateRequest>;
export type UpdateMutationError = ErrorType<unknown>;

/**
 * @summary 멤버 정보 갱신 API
 */
export const useUpdate = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof update>>,
    TError,
    { id: string; data: BodyType<MemberUpdateRequest> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof update>>,
  TError,
  { id: string; data: BodyType<MemberUpdateRequest> },
  TContext
> => {
  const mutationOptions = getUpdateMutationOptions(options);

  return useMutation(mutationOptions);
};
