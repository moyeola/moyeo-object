import { Endpoint } from "endpoint-client";

/**
 * POST /users/me/notifications/register
 * 유저의 알림을 등록합니다.
 */
export const PostUserMeNotificationRegister: Endpoint<
    PostUserMeNotificationRegisterReq,
    PostUserMeNotificationRegisterRes
> = {
    method: "POST",
    path: (e) => `/users/me/notifications/register`,
    bodyParams: ["token"],
};
export type PostUserMeNotificationRegisterReqBody = {
    token: string;
};
export type PostUserMeNotificationRegisterReq =
    PostUserMeNotificationRegisterReqBody;
export type PostUserMeNotificationRegisterRes = {};
