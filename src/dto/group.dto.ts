import { GroupEntity } from "src/entity";

export class GroupDto {
    id: number;
    name: string;
    description?: string;

    static from(group: GroupEntity): GroupDto {
        const dto = new GroupDto();
        dto.id = group.id;
        dto.name = group.name;
        dto.description = group.description;

        return dto;
    }
}
