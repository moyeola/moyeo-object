import { ReportDto } from 'src/dto/report.dto';
import { Endpoint } from 'endpoint-client';
import { ReportReasonEnum } from 'src/enum/report.enum';

/**
 * POST /users/:userId/reports
 * 유저를 신고합니다.
 */
export const PostUserReports: Endpoint<PostUserReportsReq, PostUserReportsRes> =
    {
        method: 'POST',
        path: (e) => `/users/${e.userId}/reports`,
        pathParams: ['userId'],
        bodyParams: ['reason'],
    };
export type PostUserReportsReqPath = {
    userId: string;
};
export type PostUserReportsReqBody = {
    reason?: string;
    type: ReportReasonEnum;
};
export type PostUserReportsReq = PostUserReportsReqBody &
    PostUserReportsReqPath;
export type PostUserReportsRes = {
    report: ReportDto;
};
