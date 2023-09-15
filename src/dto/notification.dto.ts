export type NotificationType =
    | "group_schedule"
    | "meet_requested"
    | "moyeo_update";

export type NotificationActionType = "to";
export type NotificationAction = {
    type: "to";
    url: string;
};
export type NotificationAuthor = {
    type: "group" | "moyeo";
    id: number;
    name: string;
};

export type NotificationDto = {
    id: number;
    title: string;
    body: string;
    author: NotificationAuthor;
    action: NotificationAction;
    createdAt: string;
};
