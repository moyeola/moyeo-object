import { Endpoint } from "endpoint-client";
import { NotificationType, NotificationAction } from "../../../dto";

/**
 * POST /groups/:groupId/notifications
 * 그룹에 알림을 생성합니다
 */
export const PostGroupNotification: Endpoint<
    PostGroupNotificationReq,
    PostGroupNotificationRes
> = {
    method: "POST",
    path: (e) => `/groups/${e.groupId}/notifications`,
    pathParams: ["groupId"],
    bodyParams: ["title", "body", "type", "action"],
};
export type PostGroupNotificationReqPath = {
    groupId: string;
};
export type PostGroupNotificationReqBody = {
    title: string;
    body: string;
    type: NotificationType;
    action: NotificationAction;
};
export type PostGroupNotificationReq = PostGroupNotificationReqPath &
    PostGroupNotificationReqBody;
export type PostGroupNotificationRes = {};
