export type NotificationType =
    | "GROUP_SCHEDULE"
    | "MEET_REQUEST"
    | "MOYEO_NOTICE";

export type NotificationAction = {
    type: "to";
    url: string;
};
export type NotificationAuthor = {
    type: "GROUP" | "MOYEO";
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
