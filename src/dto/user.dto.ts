import { MemberDto } from "./member.dto";

export class UserDto {
    id: number;
    name: string;
    profileImageUrl: string;
    status: "NEW" | "ACTIVE";
    permissions: {
        permission: "ADMIN";
    }[];

    members?: MemberDto[];

    constructor({
        id,
        name,
        profileImageUrl,
        status,
        permissions,
        members,
    }: {
        id: number;
        name: string;
        profileImageUrl: string;
        status: "NEW" | "ACTIVE";
        permissions: {
            permission: "ADMIN";
        }[];
        members?: MemberDto[];
    }) {
        this.id = id;
        this.name = name;
        this.profileImageUrl = profileImageUrl;
        this.status = status;
        this.permissions = permissions.map((permission) => ({
            permission: permission.permission,
        }));
        if (members) {
            this.members = members.map((member) => new MemberDto(member));
        }
    }
}
