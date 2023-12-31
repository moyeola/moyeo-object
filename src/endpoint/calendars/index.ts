import { Endpoint } from "endpoint-client";
import { CalendarDto } from "../../dto";

export * from "./event";

/**
 * GET /calendars
 * 캘린더 목록을 가져옵니다.
 */
export const GetCalendars: Endpoint<GetCalendarsReq, GetCalendarsRes> = {
    method: "GET",
    path: (e) => `/calendars`,
};
export type GetCalendarsReq = {};
export type GetCalendarsRes = {
    calendars: CalendarDto[];
};

/**
 * GET /calendars/search
 * 캘린더를 검색합니다.
 */
export const SearchCalendars: Endpoint<SearchCalendarsReq, SearchCalendarsRes> =
    {
        method: "GET",
        path: (e) => `/calendars/search`,
        queryParams: ["ownerId", "ownerType"],
    };
export type SearchCalendarsReq = {
    ownerId?: number;
    ownerType?: "user" | "group";
};
export type SearchCalendarsRes = {
    calendars: CalendarDto[];
};

/**
 * PATCH /calendars/:calendarId
 * 캘린더를 수정합니다.
 */
export const PatchCalendar: Endpoint<PatchCalendarReq, PatchCalendarRes> = {
    method: "PATCH",
    path: (e) => `/calendars/${e.calendarId}`,
    bodyParams: [],
};
export type PatchCalendarReqBody = {
    name?: string;
};
export type PatchCalendarReq = PatchCalendarReqBody & {
    calendarId: number;
};
export type PatchCalendarRes = {
    calendar: CalendarDto;
};

/**
 * GET /calendars/:calendarId
 * 캘린더를 가져옵니다.
 */
export const GetCalendar: Endpoint<GetCalendarReq, GetCalendarRes> = {
    method: "GET",
    path: (e) => `/calendars/${e.calendarId}`,
};
export type GetCalendarReq = {
    calendarId: number;
};
export type GetCalendarRes = {
    calendar: CalendarDto;
};
