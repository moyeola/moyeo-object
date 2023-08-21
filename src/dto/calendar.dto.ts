import { GroupDto } from "./group.dto";
import { UserDto } from "./user.dto";

export type CalendarDto = {
    id: number;
    owner:
        | {
              type: "user";
              user?: UserDto;
          }
        | {
              type: "group";
              group?: GroupDto;
          };
    createdAt: string;
    updatedAt: string;
};
