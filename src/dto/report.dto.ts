import { UserDto } from "./user.dto";

export type ReportDto = {
    id: number;
    user: UserDto;
    reporter: UserDto;
    createdAt: string;
};
