export class UserDto {
    id: number;
    name: string;
    profileImageUrl: string;
    status: "NEW" | "ACTIVE";
    permissions: {
        permission: "ADMIN";
    }[];

    constructor({
        id,
        name,
        profileImageUrl,
        status,
        permissions,
    }: {
        id: number;

        name: string;
        profileImageUrl: string;
        status: "NEW" | "ACTIVE";
        permissions: {
            permission: "ADMIN";
        }[];
    }) {
        this.id = id;
        this.name = name;
        this.profileImageUrl = profileImageUrl;
        this.status = status;
        this.permissions = permissions;
    }
}
