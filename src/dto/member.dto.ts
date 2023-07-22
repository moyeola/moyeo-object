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
        nickname: string;
        role: "OWNER" | "MEMBER";

        user?: UserDto;
        group?: GroupDto;
    }) {
        this.id = id;
        this.nickname = nickname;
        this.role = role;
        this.user = user;
        this.group = group;
    }
}
