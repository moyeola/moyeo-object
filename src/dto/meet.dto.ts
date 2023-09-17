import { GroupDto } from "./group.dto";
import { MeetResponseDto } from "./meetResponse.dto";
import { MemberDto } from "./member.dto";
import { UserDto } from "./user.dto";

export type MeetDto = {
    id: number;
    title: string;
    description?: string;
    createdAt: string;
    dates: string[];
    startTimeAt: string;
    endTimeAt: string;
    status: "PROGRESSING" | "CONFIRMED" | "CANCELED";
    responses: MeetResponseDto[];
    creator:
        | {
              type: "user";
              user?: UserDto;
          }
        | {
              type: "member";
              member?: MemberDto;
          };
};
