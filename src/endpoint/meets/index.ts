import { Endpoint } from "endpoint-client";
import { MeetDto } from "../../dto/meet.dto";

export * from "./responses";

/**
 * POST /meets
 * 일정조율을 생성합니다.
 */
export const PostMeet: Endpoint<PostMeetReq, PostMeetRes> = {
    method: "POST",
    path: "/meets",
    bodyParams: [
        "title",
        "description",
        "dates",
        "startTimeAt",
        "endTimeAt",
        "creator",
    ],
};
export type PostMeetReqBody = {
    title: string;
    description?: string;
    dates: string[];
    startTimeAt: string;
    endTimeAt: string;
    creator:
        | {
              type: "user";
          }
        | {
              type: "member";
              memberId: number;
          };
};
export type PostMeetReq = PostMeetReqBody;
export type PostMeetRes = {};

/**
 * GET /meets/:meetId
 * 일정조율을 가져옵니다.
 */
export const GetMeet: Endpoint<GetMeetReq, GetMeetRes> = {
    method: "GET",
    path: (e) => `/meets/${e.meetId}`,
    pathParams: ["meetId"],
};
export type GetMeetReqPath = {
    meetId: string;
};
export type GetMeetReq = GetMeetReqPath;
export type GetMeetRes = {
    meet: MeetDto;
};

/**
 * GET /meets
 * 일정조율 목록을 가져옵니다.
 */
export const GetMeets: Endpoint<GetMeetsReq, GetMeetsRes> = {
    method: "GET",
    path: "/meets",
    queryParams: ["creatorId", "creatorType"],
};
export type GetMeetsReq = {
    creatorType?: "user" | "member" | "group";
    creatorId?: number;
    status?: "PROGRESSING" | "CONFIRMED" | "CANCELED";
};
export type GetMeetsRes = {
    meets: MeetDto[];
};

/**
 * PATCH /meets/:meetId
 * 일정조율을 수정합니다.
 */
export const PatchMeet: Endpoint<PatchMeetReq, PatchMeetRes> = {
    method: "PATCH",
    path: (e) => `/meets/${e.meetId}`,
    pathParams: ["meetId"],
    bodyParams: [
        "title",
        "description",
        "dates",
        "startTimeAt",
        "endTimeAt",
        "status",
    ],
};
export type PatchMeetReqPath = {
    meetId: string;
};
export type PatchMeetReqBody = {
    title?: string;
    description?: string;
    dates?: string[];
    startTimeAt?: string;
    endTimeAt?: string;
    status?: "PROGRESSING" | "CONFIRMED" | "CANCELED";
};
export type PatchMeetReq = PatchMeetReqBody & PatchMeetReqPath;
export type PatchMeetRes = {};

/**
 * DELETE /meets/:meetId
 * 일정조율을 삭제합니다.
 */
export const DeleteMeet: Endpoint<DeleteMeetReq, DeleteMeetRes> = {
    method: "DELETE",
    path: (e) => `/meets/${e.meetId}`,
    pathParams: ["meetId"],
};
export type DeleteMeetReqPath = {
    meetId: string;
};
export type DeleteMeetReq = DeleteMeetReqPath;
export type DeleteMeetRes = {};
