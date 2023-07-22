import { GroupRole } from "src/enum";
import { UserDto } from "./user.dto";
import { GroupDto } from "./group.dto";

export class MemberDto {
    id: number;
    nickname: string;
    role: GroupRole;

    user: UserDto;
    group: GroupDto;
}
