import { Endpoint } from "endpoint-client";
import { CalendarEventDto } from "../../../dto";

/**
 * GET /calendars/:calendarId/events
 * 캘린더 이벤트 목록을 가져옵니다.
 */
export const GetCalendarEvents: Endpoint<
    GetCalendarEventsReq,
    GetCalendarEventsRes
> = {
    method: "GET",
    path: (e) => `/calendars/${e.calendarId}/events`,
    queryParams: ["start", "end"],
};
export type GetCalendarEventsReq = {
    calendarId: number;
    start?: string;
    end?: string;
};
export type GetCalendarEventsRes = {
    events: CalendarEventDto[];
};

/**
 * GET /calendars/:calendarId/events/:eventId
 * 캘린더 이벤트를 가져옵니다.
 */
export const GetCalendarEvent: Endpoint<
    GetCalendarEventReq,
    GetCalendarEventRes
> = {
    method: "GET",
    path: (e) => `/calendars/${e.calendarId}/events/${e.eventId}`,
    pathParams: ["eventId", "calendarId"],
};
export type GetCalendarEventReq = {
    calendarId: number;
    eventId: number;
};
export type GetCalendarEventRes = {
    event: CalendarEventDto;
};

/**
 * POST /calendars/:calendarId/events
 * 캘린더 이벤트를 생성합니다.
 */
export const PostCalendarEvent: Endpoint<
    PostCalendarEventReq,
    PostCalendarEventRes
> = {
    method: "POST",
    path: (e) => `/calendars/${e.calendarId}/events`,
    bodyParams: [
        "title",
        "description",
        "location",
        "isOnline",
        "start",
        "end",
    ],
};
export type PostCalendarEventReqBody = {
    title: string;
    description?: string;
    location?: string;
    isOnline: boolean;
    start: {
        date?: string;
        dateTime?: string;
    };
    end: {
        date?: string;
        dateTime?: string;
    };
};
export type PostCalendarEventReq = PostCalendarEventReqBody & {
    calendarId: number;
};
export type PostCalendarEventRes = {
    event: CalendarEventDto;
};

/**
 * PATCH /calendars/:calendarId/events/:eventId
 * 캘린더 이벤트를 수정합니다.
 */
export const PatchCalendarEvent: Endpoint<
    PatchCalendarEventReq,
    PatchCalendarEventRes
> = {
    method: "PATCH",

    path: (e) => `/calendars/${e.calendarId}/events/${e.eventId}`,
    bodyParams: [
        "title",
        "description",
        "location",
        "isOnline",
        "start",
        "end",
    ],
};
export type PatchCalendarEventReqBody = {
    title?: string;
    description?: string;
    location?: string;
    isOnline?: boolean;
    start?: {
        date?: string;
        dateTime?: string;
    };
    end?: {
        date?: string;
        dateTime?: string;
    };
};
export type PatchCalendarEventReq = PatchCalendarEventReqBody & {
    calendarId: number;
    eventId: number;
};
export type PatchCalendarEventRes = {
    event: CalendarEventDto;
};

/**
 * DELETE /calendars/:calendarId/events/:eventId
 * 캘린더 이벤트를 삭제합니다.
 */
export const DeleteCalendarEvent: Endpoint<
    DeleteCalendarEventReq,
    DeleteCalendarEventRes
> = {
    method: "DELETE",

    path: (e) => `/calendars/${e.calendarId}/events/${e.eventId}`,
};
export type DeleteCalendarEventReq = {
    calendarId: number;
    eventId: number;
};
export type DeleteCalendarEventRes = {};
