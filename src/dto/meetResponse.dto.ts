import { MeetDto } from "./meet.dto";
import { MemberDto } from "./member.dto";
import { UserDto } from "./user.dto";

export type MeetResponseDto = {
    id: number;
    meet?: MeetDto;
    responser:
        | {
              type: "user";
              user?: UserDto;
          }
        | {
              type: "member";
              member?: MemberDto;
          }
        | {
              type: "guest";
              guest?: {
                  name: string;
                  email: string;
              };
          };
    times: {
        start: string;
        end: string;
    }[];
    createdAt: string;
};
