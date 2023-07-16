import { Endpoint } from 'endpoint-client';
import { AccessTokenPayload } from 'src/type';

/**
 * POST /auth/google
 * 구글 계정으로 로그인합니다
 */
export const PostAuthGoogle: Endpoint<PostAuthGoogleReq, PostAuthGoogleRes> = {
    method: 'POST',
    path: '/auth/google',
    bodyParams: ['token'],
};
export interface PostAuthGoogleReqBody {
    token: string;
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
    method: 'GET',
    path: '/auth/token',
};
export type GetAuthTokenReq = {};
export interface GetAuthTokenRes {
    accessToken: AccessTokenPayload;
}
