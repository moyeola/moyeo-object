import { UserDto } from "./user.dto";
import { GroupDto } from "./group.dto";

export class MemberDto {
    id: number;
    nickname: string;
    role: "OWNER" | "MEMBER";

    user?: UserDto;
    group?: GroupDto;

    constructor({
        id,
        nickname,
        role,
        user,
        group,
    }: {
        id: number;
        nickname?: string;
        role: "OWNER" | "MEMBER";

        user?: UserDto;
        group?: GroupDto;
    }) {
        this.id = id;
        this.nickname = nickname || user.name;
        this.role = role;
        this.user = new UserDto(user);
        this.group = new GroupDto(group);
    }
}
