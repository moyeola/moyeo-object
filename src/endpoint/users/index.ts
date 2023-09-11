import { Endpoint } from "endpoint-client";
import { GroupDto, MemberDto, UserDto } from "../../dto";

/**
 * GET /users/me
 * 유저 정보를 가져옵니다.
 */
export const GetUserMe: Endpoint<GetUserMeReq, GetUserMeRes> = {
    method: "GET",
    path: (e) => `/users/me`,
};

export type GetUserMeReq = {};
export type GetUserMeRes = {
    user: UserDto & {
        members: (MemberDto & {
            group: GroupDto;
        })[];
    };
};

/**
 * PATCH /users/me
 * 유저 정보를 수정합니다.
 */
export const PatchUserMe: Endpoint<PatchUserMeReq, PatchUserMeRes> = {
    method: "PATCH",
    path: (e) => `/users/me`,
    bodyParams: ["name", "profileImageUrl"],
};
export type PatchUserMeReqBody = {
    name?: string;
    profileImageUrl?: string;
};
export type PatchUserMeReq = PatchUserMeReqBody;
export type PatchUserMeRes = {
    user: UserDto;
};

/**
 * DELETE /users/me
 * 유저를 삭제합니다.
 */
export const DeleteUserMe: Endpoint<DeleteUserMeReq, DeleteUserMeRes> = {
    method: "DELETE",
    path: (e) => `/users/me`,
};

export type DeleteUserMeReq = {};
export type DeleteUserMeRes = {};

/**
 * GET /users/search
 * 유저를 검색합니다.
 */
export const GetUsersSearch: Endpoint<GetUsersSearchReq, GetUsersSearchRes> = {
    method: "GET",
    path: "/users/search",
    queryParams: ["query", "limit", "offset"],
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
