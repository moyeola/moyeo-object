import { UserStatus } from 'src/enum';
import { GroupDto } from './group.dto';

export class UserDto {
    id: number;
    name: string;
    profileImageUrl: string;
    status: UserStatus;

    static from(user: UserDto): UserDto {
        const dto = new UserDto();
        dto.id = user.id;
        dto.name = user.name;
        dto.profileImageUrl = user.profileImageUrl;
        dto.status = user.status;
        return dto;
    }
}
