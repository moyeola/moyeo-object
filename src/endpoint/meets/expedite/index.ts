import { Endpoint } from "endpoint-client";

/**
 * POST /meets/:meetId/expedite
 * 미참여 팀원에게 독촉 알림을 전송합니다.
 */
export const PostMeetExpedite: Endpoint<
    PostMeetExpediteReq,
    PostMeetExpediteRes
> = {
    method: "POST",
    path: (e) => `/meets/${e.meetId}/expedite`,
    pathParams: ["meetId"],
};
export type PostMeetExpediteReqPath = {
    meetId: string;
};
export type PostMeetExpediteReq = PostMeetExpediteReqPath;
export type PostMeetExpediteRes = {};
