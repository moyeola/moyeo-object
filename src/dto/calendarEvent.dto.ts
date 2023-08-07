import { CalendarDto } from "./calendar.dto";

export type CalendarEventDto = {
    id: number;
    calendarId: number;
    creatorId: number;

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

    createdAt: string;
    updatedAt: string;
};
