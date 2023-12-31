import { Endpoint } from "endpoint-client";

/**
 * POST /auth/google
 * 구글 계정으로 로그인합니다
 */
export const PostAuthGoogle: Endpoint<PostAuthGoogleReq, PostAuthGoogleRes> = {
    method: "POST",
    path: "/auth/google",
    bodyParams: ["token", "redirectUri"],
};
export interface PostAuthGoogleReqBody {
    token: string;
    redirectUri?: string;
}
export type PostAuthGoogleReq = PostAuthGoogleReqBody;
export interface PostAuthGoogleRes {
    accessToken: string;
}

/**
 * GET /auth/token
 * 토큰을 검증합니다
 */
export const GetAuthToken: Endpoint<GetAuthTokenReq, GetAuthTokenRes> = {
    method: "GET",
    path: "/auth/token",
};
export type GetAuthTokenReq = {};
export interface GetAuthTokenRes {
    accessToken: {
        userId: number;
        type: "user";
        version: "v1";
        permissions: string[];
    };
}
