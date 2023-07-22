import { UserStatus } from "src/enum";

export class UserDto {
    id: number;
    name: string;
    profileImageUrl: string;
    status: UserStatus;
}
