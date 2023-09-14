import { Endpoint } from "endpoint-client";
import { NotificationDto } from "src/dto";

/**
 * GET /users/me/notification
 * 유저의 알림을 가져옵니다.
 */
export const GetUserMeNotifications: Endpoint<
    GetUserMeNotificationsReq,
    GetUserMeNotificationsRes
> = {
    method: "GET",
    path: (e) => `/users/me/notifications`,
    queryParams: ["limit", "offset"],
};
export type GetUserMeNotificationsReqQuery = {
    limit?: number;
    offset?: number;
};
export type GetUserMeNotificationsReq = GetUserMeNotificationsReqQuery;
export type GetUserMeNotificationsRes = {
    notifications: NotificationDto[];
};

/**
 * DELETE /users/me/notification/:notificationId
 * 유저의 알림을 삭제합니다.
 */
export const DeleteUserMeNotification: Endpoint<
    DeleteUserMeNotificationReq,
    DeleteUserMeNotificationRes
> = {
    method: "DELETE",
    path: (e) => `/users/me/notifications/${e.notificationId}`,
    pathParams: ["notificationId"],
};
export type DeleteUserMeNotificationReqPath = {
    notificationId: string;
};
export type DeleteUserMeNotificationReq = DeleteUserMeNotificationReqPath;
export type DeleteUserMeNotificationRes = {};
