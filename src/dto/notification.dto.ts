export type NotificationType =
    | "group_schedule"
    | "meet_requested"
    | "moyeo_update";

export type NotificationActionType = "to";
export type NotificationAction = {
    type: "to";
    url: string;
};

export type NotificationDto = {
    id: number;
    title: string;
    body: string;
    author: string;
    type: NotificationType;
    action: NotificationAction;
    createdAt: string;
};
