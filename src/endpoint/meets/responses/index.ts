import { Endpoint } from "endpoint-client";

/**
 * POST /meets/:meetId/responses
 * 일정조율에 응답합니다.
 */
export const PostMeetResponse: Endpoint<
    PostMeetResponseReq,
    PostMeetResponseRes
> = {
    method: "POST",
    path: (e) => `/meets/${e.meetId}/responses`,
    pathParams: ["meetId"],
    bodyParams: ["responserType", "guest", "times"],
};
export type PostMeetResponseReqPath = {
    meetId: string;
};
export type PostMeetResponseReqBody = {
    responserType: "user" | "member" | "guest";
    guest?: {
        name: string;
        email: string;
    };
    times: {
        start: string;
        end: string;
    }[];
};
export type PostMeetResponseReq = PostMeetResponseReqBody &
    PostMeetResponseReqPath;
export type PostMeetResponseRes = {};

/**
 * PATCH /meets/:meetId/responses/:responseId
 * 일정조율 응답을 수정합니다.
 */
export const PatchMeetResponse: Endpoint<
    PatchMeetResponseReq,
    PatchMeetResponseRes
> = {
    method: "PATCH",

    path: (e) => `/meets/${e.meetId}/responses/${e.responseId}`,
    pathParams: ["meetId", "responseId"],
    bodyParams: ["times"],
};
export type PatchMeetResponseReqPath = {
    meetId: string;
    responseId: string;
};
export type PatchMeetResponseReqBody = {
    times: {
        start: string;
        end: string;
    }[];
};
export type PatchMeetResponseReq = PatchMeetResponseReqBody &
    PatchMeetResponseReqPath;
export type PatchMeetResponseRes = {};

/**
 * DELETE /meets/:meetId/responses/:responseId
 * 일정조율 응답을 삭제합니다.
 */
export const DeleteMeetResponse: Endpoint<
    DeleteMeetResponseReq,
    DeleteMeetResponseRes
> = {
    method: "DELETE",
    path: (e) => `/meets/${e.meetId}/responses/${e.responseId}`,
    pathParams: ["meetId", "responseId"],
};
export type DeleteMeetResponseReqPath = {
    meetId: string;
    responseId: string;
};
export type DeleteMeetResponseReq = DeleteMeetResponseReqPath;
export type DeleteMeetResponseRes = {};
