import { UserDto } from "./user.dto";

export class ReportDto {
    id: number;
    user: UserDto;
    reporter: UserDto;
}
