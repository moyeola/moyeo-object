import { Endpoint } from "endpoint-client";
import { MeetResponseDto } from "src/dto";

/**
 * GET /meets/:meetId/responses/:responseId
 * 일정조율 응답을 조회합니다.
 */
export const GetMeetResponse: Endpoint<GetMeetResponseReq, GetMeetResponseRes> =
    {
        method: "GET",
        path: (e) => `/meets/${e.meetId}/responses/${e.responseId}`,
        pathParams: ["meetId", "responseId"],
    };
export type GetMeetResponseReqPath = {
    meetId: string;
    responseId: string;
};
export type GetMeetResponseReq = GetMeetResponseReqPath;
export type GetMeetResponseRes = {
    meetResponse: MeetResponseDto;
};

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
    bodyParams: ["responser", "times"],
};
export type PostMeetResponseReqPath = {
    meetId: string;
};
export type PostMeetResponseReqBody = {
    responser:
        | {
              type: "user";
          }
        | {
              type: "member";
              memberId: number;
          }
        | {
              type: "guest";
              guest: {
                  name: string;
                  email: string;
              };
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
