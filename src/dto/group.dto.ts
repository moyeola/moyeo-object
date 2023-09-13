import { MemberDto } from "./member.dto";

export type GroupDto = {
    id: number;
    name: string;
    description?: string;
    members?: MemberDto[];
    createdAt: string;
    status: "ACTIVE" | "INACTIVE";
};
