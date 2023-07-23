import { MemberDto } from "./member.dto";

export type UserDto = {
    id: number;
    name: string;
    profileImageUrl: string;
    status: "NEW" | "ACTIVE";
    permissions: {
        permission: "ADMIN";
    }[];

    members?: MemberDto[];
};
