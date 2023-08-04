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

export const PostFiles: Endpoint<PostFilesReq, PostFilesRes> = {
    method: "POST",
    path: "/files",
    bodyParams: ["file", "category"],
};
export type PostFilesReqBody = {
    file: any;
    category: FileCategory;
};
export type PostFilesReq = PostFilesReqBody;
export type PostFilesRes = {
    url: string;
};
