import { Endpoint } from "endpoint-client";
import { GroupDto, MemberDto } from "../../dto";

export * from "./members";
export * from "./notifications";

/**
 * GET /groups/:groupId
 * 그룹 정보를 가져옵니다
 */
export const GetGroup: Endpoint<GetGroupReq, GetGroupRes> = {
    method: "GET",
    path: (e) => `/groups/${e.groupId}`,
    pathParams: ["groupId"],
};
export type GetGroupReqPath = {
    groupId: string;
};
export type GetGroupReq = GetGroupReqPath;
export type GetGroupRes = {
    group: GroupDto & {
        members: MemberDto[];
    };
};

/**
 * POST /groups
 * 그룹을 생성합니다
 */
export const PostGroup: Endpoint<PostGroupReq, PostGroupRes> = {
    method: "POST",
    path: "/groups",
    bodyParams: ["name", "description"],
};
export type PostGroupReqBody = {
    name: string;
    description?: string;
};
export type PostGroupReq = PostGroupReqBody;
export type PostGroupRes = {
    group: GroupDto;
};

/**
 * PATCH /groups/:groupId
 * 그룹 정보를 수정합니다
 */
export const PatchGroup: Endpoint<PatchGroupReq, PatchGroupRes> = {
    method: "PATCH",
    path: (e) => `/groups/${e.groupId}`,
    pathParams: ["groupId"],
    bodyParams: ["name", "description", "status"],
};
export type PatchGroupReqPath = {
    groupId: string;
};
export type PatchGroupReqBody = {
    name?: string;
    description?: string;
    status?: "ACTIVE" | "INACTIVE";
};
export type PatchGroupReq = PatchGroupReqBody & PatchGroupReqPath;
export type PatchGroupRes = {
    group: GroupDto;
};

/**
 * DELETE /groups/:groupId
 * 그룹을 삭제합니다
 */
export const DeleteGroup: Endpoint<DeleteGroupReq, DeleteGroupRes> = {
    method: "DELETE",
    path: (e) => `/groups/${e.groupId}`,
    pathParams: ["groupId"],
};
export type DeleteGroupReqPath = {
    groupId: string;
};
export type DeleteGroupReq = DeleteGroupReqPath;
export type DeleteGroupRes = {};

/**
 * GET /groups/search
 * 그룹을 검색합니다
 */
export const GetGroupsSearch: Endpoint<GetGroupsSearchReq, GetGroupsSearchRes> =
    {
        method: "GET",
        path: "/groups/search",
        queryParams: ["query", "limit", "offset"],
    };
export type GetGroupsSearchReqQuery = {
    query: string;
    limit?: number;
    offset?: number;
};
export type GetGroupsSearchReq = GetGroupsSearchReqQuery;
export type GetGroupsSearchRes = {
    groups: GroupDto[];
};

/**
 * GET /groups/:groupId/invite-code
 * 그룹 초대 코드를 가져옵니다
 */
export const GetGroupInviteCode: Endpoint<
    GetGroupInviteCodeReq,
    GetGroupInviteCodeRes
> = {
    method: "GET",
    path: (e) => `/groups/${e.groupId}/invite-code`,
    pathParams: ["groupId"],
};
export type GetGroupInviteCodeReqPath = {
    groupId: string;
};
export type GetGroupInviteCodeReq = GetGroupInviteCodeReqPath;
export type GetGroupInviteCodeRes = {
    inviteCode: string;
};

/**
 * POST /groups/invite
 * 그룹 초대 코드를 통해 그룹에 가입합니다
 */
export const PostGroupInvite: Endpoint<PostGroupInviteReq, PostGroupInviteRes> =
    {
        method: "POST",
        path: "/groups/invite",
        bodyParams: ["inviteCode"],
    };
export type PostGroupInviteReqBody = {
    inviteCode: string;
};
export type PostGroupInviteReq = PostGroupInviteReqBody;
export type PostGroupInviteRes = {
    member: MemberDto;
};
