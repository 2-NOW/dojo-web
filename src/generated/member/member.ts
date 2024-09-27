/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  DojoApiResponseFriendSpacePickResponse,
  DojoApiResponseListMemberSearchResponse,
  DojoApiResponseMemberCreateResponse,
  DojoApiResponseMemberLoginResponse,
  DojoApiResponseMemberProfileResponse,
  DojoApiResponseMemberRelationId,
  DojoApiResponseMemberUpdateResponse,
  DojoApiResponseMyProfileResponse,
  DojoApiResponseMySpacePickResponse,
  DojoApiResponseUnit,
  MemberCreateFriendRelationRequest,
  MemberCreateRequest,
  MemberDeleteFriendRelationRequest,
  MemberLoginRequest,
  MemberUpdateRequest,
  SearchMemberParams
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
 * 친구(팔로우) 관계 생성 API, 친구 추가 기능에 대해서 from 이 to 를 follow 합니다. 이미 follow가 존재한다면 예외를 반환해요
 * @summary 친구(팔로우)추가 API
 */
export const createFriend = (
    memberCreateFriendRelationRequest: BodyType<MemberCreateFriendRelationRequest>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<DojoApiResponseMemberRelationId>(
      {url: `https://docker-ecs.net/member/friend`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: memberCreateFriendRelationRequest
    },
      options);
    }
  


export const getCreateFriendMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createFriend>>, TError,{data: BodyType<MemberCreateFriendRelationRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof createFriend>>, TError,{data: BodyType<MemberCreateFriendRelationRequest>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createFriend>>, {data: BodyType<MemberCreateFriendRelationRequest>}> = (props) => {
          const {data} = props ?? {};

          return  createFriend(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateFriendMutationResult = NonNullable<Awaited<ReturnType<typeof createFriend>>>
    export type CreateFriendMutationBody = BodyType<MemberCreateFriendRelationRequest>
    export type CreateFriendMutationError = ErrorType<unknown>

    /**
 * @summary 친구(팔로우)추가 API
 */
export const useCreateFriend = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createFriend>>, TError,{data: BodyType<MemberCreateFriendRelationRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof createFriend>>,
        TError,
        {data: BodyType<MemberCreateFriendRelationRequest>},
        TContext
      > => {

      const mutationOptions = getCreateFriendMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * from 이 to 에 대한 친구(팔로우)를 해제합니다. 이미 친구 관계가 아니라면 예외를 반환해요.
 * @summary 친구(팔로우)해제 API
 */
export const deleteFriend = (
    memberDeleteFriendRelationRequest: BodyType<MemberDeleteFriendRelationRequest>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<DojoApiResponseUnit>(
      {url: `https://docker-ecs.net/member/friend`, method: 'DELETE',
      headers: {'Content-Type': 'application/json', },
      data: memberDeleteFriendRelationRequest
    },
      options);
    }
  


export const getDeleteFriendMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteFriend>>, TError,{data: BodyType<MemberDeleteFriendRelationRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteFriend>>, TError,{data: BodyType<MemberDeleteFriendRelationRequest>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteFriend>>, {data: BodyType<MemberDeleteFriendRelationRequest>}> = (props) => {
          const {data} = props ?? {};

          return  deleteFriend(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteFriendMutationResult = NonNullable<Awaited<ReturnType<typeof deleteFriend>>>
    export type DeleteFriendMutationBody = BodyType<MemberDeleteFriendRelationRequest>
    export type DeleteFriendMutationError = ErrorType<unknown>

    /**
 * @summary 친구(팔로우)해제 API
 */
export const useDeleteFriend = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteFriend>>, TError,{data: BodyType<MemberDeleteFriendRelationRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof deleteFriend>>,
        TError,
        {data: BodyType<MemberDeleteFriendRelationRequest>},
        TContext
      > => {

      const mutationOptions = getDeleteFriendMutationOptions(options);

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
    /**
 * 멤버의 프로필을 조회하는 API.
 * @summary 타인 멤버 프로필 조회 API
 */
export const getProfile = (
    memberId: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<DojoApiResponseMemberProfileResponse>(
      {url: `https://docker-ecs.net/member/${memberId}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetProfileQueryKey = (memberId: string,) => {
    return [`https://docker-ecs.net/member/${memberId}`] as const;
    }

    
export const getGetProfileQueryOptions = <TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(memberId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetProfileQueryKey(memberId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getProfile>>> = ({ signal }) => getProfile(memberId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(memberId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData> & { queryKey: QueryKey }
}

export type GetProfileQueryResult = NonNullable<Awaited<ReturnType<typeof getProfile>>>
export type GetProfileQueryError = ErrorType<unknown>

/**
 * @summary 타인 멤버 프로필 조회 API
 */
export const useGetProfile = <TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(
 memberId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetProfileQueryOptions(memberId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * 친구, 친구 아닌 사람 모두 검색 가능한 통합 검색 기능입니다.
 * @summary 멤버 검색 API
 */
export const searchMember = (
    params: SearchMemberParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<DojoApiResponseListMemberSearchResponse>(
      {url: `https://docker-ecs.net/member/search`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getSearchMemberQueryKey = (params: SearchMemberParams,) => {
    return [`https://docker-ecs.net/member/search`, ...(params ? [params]: [])] as const;
    }

    
export const getSearchMemberQueryOptions = <TData = Awaited<ReturnType<typeof searchMember>>, TError = ErrorType<unknown>>(params: SearchMemberParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof searchMember>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getSearchMemberQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof searchMember>>> = ({ signal }) => searchMember(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof searchMember>>, TError, TData> & { queryKey: QueryKey }
}

export type SearchMemberQueryResult = NonNullable<Awaited<ReturnType<typeof searchMember>>>
export type SearchMemberQueryError = ErrorType<unknown>

/**
 * @summary 멤버 검색 API
 */
export const useSearchMember = <TData = Awaited<ReturnType<typeof searchMember>>, TError = ErrorType<unknown>>(
 params: SearchMemberParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof searchMember>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getSearchMemberQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * 마이스페이스 탭 중 내가 받은 픽의 대한 API입니다. 공동 등수를 자동으로 계산하고 반환합니다. Pick이 많은 순서대로 등수를 나누고, 최신순, 내림차순으로 정렬합니다.
 * @summary 마이 스페이스 내가 받은 픽 API
 */
export const mySpace = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<DojoApiResponseMySpacePickResponse>(
      {url: `https://docker-ecs.net/member/my-space/pick`, method: 'GET', signal
    },
      options);
    }
  

export const getMySpaceQueryKey = () => {
    return [`https://docker-ecs.net/member/my-space/pick`] as const;
    }

    
export const getMySpaceQueryOptions = <TData = Awaited<ReturnType<typeof mySpace>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof mySpace>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getMySpaceQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof mySpace>>> = ({ signal }) => mySpace(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof mySpace>>, TError, TData> & { queryKey: QueryKey }
}

export type MySpaceQueryResult = NonNullable<Awaited<ReturnType<typeof mySpace>>>
export type MySpaceQueryError = ErrorType<unknown>

/**
 * @summary 마이 스페이스 내가 받은 픽 API
 */
export const useMySpace = <TData = Awaited<ReturnType<typeof mySpace>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof mySpace>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getMySpaceQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * 멤버의 프로필을 조회하는 API.
 * @summary 타인 멤버 프로필 조회 API
 */
export const getProfileMock = (
    memberId: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<DojoApiResponseMemberProfileResponse>(
      {url: `https://docker-ecs.net/member/mock/${memberId}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetProfileMockQueryKey = (memberId: string,) => {
    return [`https://docker-ecs.net/member/mock/${memberId}`] as const;
    }

    
export const getGetProfileMockQueryOptions = <TData = Awaited<ReturnType<typeof getProfileMock>>, TError = ErrorType<unknown>>(memberId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfileMock>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetProfileMockQueryKey(memberId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getProfileMock>>> = ({ signal }) => getProfileMock(memberId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(memberId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getProfileMock>>, TError, TData> & { queryKey: QueryKey }
}

export type GetProfileMockQueryResult = NonNullable<Awaited<ReturnType<typeof getProfileMock>>>
export type GetProfileMockQueryError = ErrorType<unknown>

/**
 * @summary 타인 멤버 프로필 조회 API
 */
export const useGetProfileMock = <TData = Awaited<ReturnType<typeof getProfileMock>>, TError = ErrorType<unknown>>(
 memberId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfileMock>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetProfileMockQueryOptions(memberId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * 본인 프로필 조회 API, header 토큰에 의해 본인을 식별해요
 * @summary 본인 프로필 조회 API
 */
export const me = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<DojoApiResponseMyProfileResponse>(
      {url: `https://docker-ecs.net/member/me`, method: 'GET', signal
    },
      options);
    }
  

export const getMeQueryKey = () => {
    return [`https://docker-ecs.net/member/me`] as const;
    }

    
export const getMeQueryOptions = <TData = Awaited<ReturnType<typeof me>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof me>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getMeQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof me>>> = ({ signal }) => me(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof me>>, TError, TData> & { queryKey: QueryKey }
}

export type MeQueryResult = NonNullable<Awaited<ReturnType<typeof me>>>
export type MeQueryError = ErrorType<unknown>

/**
 * @summary 본인 프로필 조회 API
 */
export const useMe = <TData = Awaited<ReturnType<typeof me>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof me>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getMeQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * 친구 스페이스 탭 중 친구가 받은 픽의 대한 API입니다. 공동 등수를 자동으로 계산하고 반환합니다. Pick이 많은 순서대로 등수를 나누고, 최신순, 내림차순으로 정렬합니다.
 * @summary 친구 스페이스 친구가 받은 픽 API
 */
export const friendSpace = (
    friendId: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<DojoApiResponseFriendSpacePickResponse>(
      {url: `https://docker-ecs.net/member/friend-space/${friendId}/pick`, method: 'GET', signal
    },
      options);
    }
  

export const getFriendSpaceQueryKey = (friendId: string,) => {
    return [`https://docker-ecs.net/member/friend-space/${friendId}/pick`] as const;
    }

    
export const getFriendSpaceQueryOptions = <TData = Awaited<ReturnType<typeof friendSpace>>, TError = ErrorType<unknown>>(friendId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof friendSpace>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getFriendSpaceQueryKey(friendId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof friendSpace>>> = ({ signal }) => friendSpace(friendId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(friendId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof friendSpace>>, TError, TData> & { queryKey: QueryKey }
}

export type FriendSpaceQueryResult = NonNullable<Awaited<ReturnType<typeof friendSpace>>>
export type FriendSpaceQueryError = ErrorType<unknown>

/**
 * @summary 친구 스페이스 친구가 받은 픽 API
 */
export const useFriendSpace = <TData = Awaited<ReturnType<typeof friendSpace>>, TError = ErrorType<unknown>>(
 friendId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof friendSpace>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getFriendSpaceQueryOptions(friendId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



