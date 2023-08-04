import { Endpoint } from "endpoint-client";

/**
 * POST /files
 * 파일을 업로드합니다.
 */
export type FileCategory =
    | "users"
    | "users/profiles"
    | "resources"
    | "resources/app"
    | "resources/other";

export const PostFile: Endpoint<PostFileReq, PostFileRes> = {
    method: "POST",
    path: "/files",
    bodyParams: ["file", "category"],
};
export type PostFileReqBody = {
    file: any;
    category: FileCategory;
};
export type PostFileReq = PostFileReqBody;
export type PostFileRes = {
    url: string;
};
