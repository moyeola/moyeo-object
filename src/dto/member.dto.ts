import { UserDto } from "./user.dto";
import { GroupDto } from "./group.dto";

export type MemberDto = {
    id: number;
    nickname: string;
    role: "OWNER" | "MEMBER";
    createdAt: string;

    user?: UserDto;
    group?: GroupDto;
};
