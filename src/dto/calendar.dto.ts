import { GroupDto } from "./group.dto";
import { UserDto } from "./user.dto";

export type CalendarDto = {
    id: number;
    name: string;
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
