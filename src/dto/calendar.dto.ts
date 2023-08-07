import { GroupDto } from "./group.dto";

export type CalendarDto = {
    id: number;
    group: GroupDto;
    createdAt: string;
    updatedAt: string;
};
