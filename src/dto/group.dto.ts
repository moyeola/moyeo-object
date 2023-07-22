import { MemberDto } from "./member.dto";

export class GroupDto {
    id: number;
    name: string;
    description?: string;

    members?: MemberDto[];

    constructor({
        id,
        name,
        description,
        members,
    }: {
        id: number;
        name: string;
        description?: string;
        members?: MemberDto[];
    }) {
        this.id = id;
        this.name = name;
        this.description = description;
        if (members) {
            this.members = members.map((member) => new MemberDto(member));
        }
    }
}
