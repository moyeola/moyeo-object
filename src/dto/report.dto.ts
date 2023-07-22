import { UserDto } from "./user.dto";

export class ReportDto {
    id: number;
    user: UserDto;
    reporter: UserDto;

    constructor({
        id,
        user,
        reporter,
    }: {
        id: number;

        user: UserDto;
        reporter: UserDto;
    }) {
        this.id = id;
        this.user = user;
        this.reporter = reporter;
    }
}
