import { Endpoint } from "endpoint-client";

/**
 * POST /dev/auth
 * 개발용 토큰을 발급합니다
 */
export const PostDevAuth: Endpoint<PostDevAuthReq, PostDevAuthRes> = {
    method: "POST",
    path: "/dev/auth",
    bodyParams: ["masterToken", "developerName"],
};
export type PostDevAuthReqBody = {
    masterToken: string;
    developerName: string;
};
export type PostDevAuthReq = PostDevAuthReqBody;
export type PostDevAuthRes = {
    devToken: string;
};

/**
 * POST /dev/access-token
 * 임의의 엑세스 토큰을 발급합니다
 */
export const PostDevAccessToken: Endpoint<
    PostDevAccessTokenReq,
    PostDevAccessTokenRes
> = {
    method: "POST",
    path: "/dev/access-token",
    bodyParams: ["userId", "permissions"],
};

export type PostDevAccessTokenReqBody = {
    userId: number;
    permissions: string[];
};
export type PostDevAccessTokenReq = PostDevAccessTokenReqBody;
export type PostDevAccessTokenRes = {
    accessToken: string;
};
