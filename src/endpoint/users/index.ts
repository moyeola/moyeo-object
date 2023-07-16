import { Endpoint } from 'endpoint-client';
import { GroupDto, UserDto } from 'src/dto';

/**
 * GET /users/:userId
 * 유저 정보를 가져옵니다.
 */
export const GetUser: Endpoint<GetUserReq, GetUserRes> = {
    method: 'GET',
    path: (e) => `/users/${e.userId}`,
    pathParams: ['userId'],
};

export type GetUserReqPath = {
    userId: string;
};
export type GetUserReq = GetUserReqPath;
export type GetUserRes = {
    user: UserDto & {
        groups: GroupDto[];
    };
};

/**
 * PATCH /users/:userId
 * 유저 정보를 수정합니다.
 */
export const PatchUser: Endpoint<PatchUserReq, PatchUserRes> = {
    method: 'PATCH',
    path: (e) => `/users/${e.userId}`,
    pathParams: ['userId'],
    bodyParams: ['name', 'profileImageUrl'],
};
export type PatchUserReqPath = {
    userId: string;
};
export type PatchUserReqBody = {
    name?: string;
    profileImageUrl?: string;
};
export type PatchUserReq = PatchUserReqBody & PatchUserReqPath;
export type PatchUserRes = {
    user: UserDto;
};

/**
 * DELETE /users/:userId
 * 유저를 삭제합니다.
 */
export const DeleteUser: Endpoint<DeleteUserReq, DeleteUserRes> = {
    method: 'DELETE',
    path: (e) => `/users/${e.userId}`,
    pathParams: ['userId'],
};
export type DeleteUserReqPath = {
    userId: string;
};
export type DeleteUserReq = DeleteUserReqPath;
export type DeleteUserRes = {};

/**
 * GET /users/search
 * 유저를 검색합니다.
 */
export const GetUsersSearch: Endpoint<GetUsersSearchReq, GetUsersSearchRes> = {
    method: 'GET',
    path: '/users/search',
    queryParams: ['query', 'limit', 'offset'],
};
export type GetUsersSearchReqQuery = {
    query: string;
    limit?: number;
    offset?: number;
};
export type GetUsersSearchReq = GetUsersSearchReqQuery;
export type GetUsersSearchRes = {
    users: UserDto[];
};
