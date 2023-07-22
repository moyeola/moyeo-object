import { UserDto } from "./user.dto";
import { GroupDto } from "./group.dto";

export class MemberDto {
    id: number;
    nickname: string;
    role: "OWNER" | "MEMBER";

    user?: UserDto;
    group?: GroupDto;
}
