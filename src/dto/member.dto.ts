import { MemberEntity } from "src/entity";
import { GroupRole } from "src/enum";
import { UserDto } from "./user.dto";
import { GroupDto } from "./group.dto";

export class MemberDto {
    id: number;
    nickname: string;
    role: GroupRole;

    user: UserDto;
    group: GroupDto;

    /**
     * MemberEntity로부터 MemberDto를 생성합니다.
     * MemberEntity에 user와 group이 존재해야 합니다.
     * @param report
     * @returns
     */
    static from(member: MemberEntity): MemberDto {
        const dto = new MemberDto();
        dto.id = member.id;
        dto.nickname = member.nickname || member.user.name;
        dto.role = member.role;
        dto.user = UserDto.from(member.user);
        dto.group = GroupDto.from(member.group);

        return dto;
    }
}
