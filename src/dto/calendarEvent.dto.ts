export type CalendarEventDto = {
    id: number;
    calendarId: number;
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
