import { Endpoint } from "endpoint-client";
import { MemberDto } from "../../../dto";

/**
 * GET /groups/:groupId/members
 * 그룹의 멤버 목록을 가져옵니다
 */
export const GetGroupMembers: Endpoint<GetGroupMembersReq, GetGroupMembersRes> =
    {
        method: "GET",
        path: (e) => `/groups/${e.groupId}/members`,
        pathParams: ["groupId"],
    };
export type GetGroupMembersReqPath = {
    groupId: string;
};
export type GetGroupMembersReq = GetGroupMembersReqPath;
export type GetGroupMembersRes = {
    members: MemberDto[];
};

/**
 * POST /groups/:groupId/members
 * 그룹에 멤버를 추가합니다
 */
export const PostGroupMembers: Endpoint<
    PostGroupMembersReq,
    PostGroupMembersRes
> = {
    method: "POST",
    path: (e) => `/groups/${e.groupId}/members`,
    pathParams: ["groupId"],
    bodyParams: ["userId"],
};
export type PostGroupMembersReqPath = {
    groupId: string;
};
export type PostGroupMembersReqBody = {
    userId: string;
};
export type PostGroupMembersReq = PostGroupMembersReqBody &
    PostGroupMembersReqPath;
export type PostGroupMembersRes = {
    member: MemberDto;
};

/**
 * GET /groups/:groupId/members/:memberId
 * 그룹의 멤버 정보를 가져옵니다
 */
export const GetGroupMember: Endpoint<GetGroupMemberReq, GetGroupMemberRes> = {
    method: "GET",
    path: (e) => `/groups/${e.groupId}/members/${e.memberId}`,
    pathParams: ["groupId", "memberId"],
};
export type GetGroupMemberReqPath = {
    groupId: string;
    memberId: string;
};
export type GetGroupMemberReq = GetGroupMemberReqPath;
export type GetGroupMemberRes = {
    member: MemberDto;
};

/**
 * DELETE /groups/:groupId/members/:memberId
 * 그룹의 멤버를 제거합니다
 */
export const DeleteGroupMember: Endpoint<
    DeleteGroupMemberReq,
    DeleteGroupMemberRes
> = {
    method: "DELETE",
    path: (e) => `/groups/${e.groupId}/members/${e.memberId}`,
    pathParams: ["groupId", "memberId"],
};
export type DeleteGroupMemberReqPath = {
    groupId: string;
    memberId: string;
};
export type DeleteGroupMemberReq = DeleteGroupMemberReqPath;
export type DeleteGroupMemberRes = {};

/**
 * PATCH /groups/:groupId/members/:memberId
 * 그룹의 멤버 정보를 수정합니다
 */
export const PatchGroupMember: Endpoint<
    PatchGroupMemberReq,
    PatchGroupMemberRes
> = {
    method: "PATCH",
    path: (e) => `/groups/${e.groupId}/members/${e.memberId}`,
    pathParams: ["groupId", "memberId"],
};
export type PatchGroupMemberReqPath = {
    groupId: string;
    memberId: string;
};
export type PatchGroupMemberReqBody = {
    nickname?: string;
};
export type PatchGroupMemberReq = PatchGroupMemberReqBody &
    PatchGroupMemberReqPath;
export type PatchGroupMemberRes = {
    member: MemberDto;
};
