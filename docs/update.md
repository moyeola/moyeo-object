# Update

moyeo-object 라이브러리의 변경사항을 기록합니다. [Notion 문서](https://www.notion.so/32aed8bf42344d698e7430326b3037ad)

## v0.6.3

-   Dto

    -   `MeetDto` 를 변경했어요. (creator에서 type: group을 type member로 수정)

-   Endpoint

    -   `PostMeetReqBody` 를 일부 변경헀어요. (creatorType, groupId -> creator)

## v0.6.2

-   Endpoint
    -   `PostMeetResponseReqBody`를 일부 변경했어요.
    -   `GetGroupsSearchReqQuery`를 일부 변경했어요.

## v0.6.1

-   Endpoint
    -   `GetMeets` 엔드포인트를 추가했어요.

## v0.6.0

-   Dto

    -   ⚠️ `CalendarDto`을 변경했어요.
        -   이제 Calendar는 User 명의로도 만들 수 있습니다.
    -   `MeetDto`, `MeetResponseDto`를 추가했어요.
    -   `CalendarDto`에 group 속성을 제외하고 owner 속성을 추가했어요.
    -   `UserDto`에 createAt 속성을 추가했어요.
    -   `GroupDto`에 createAt 속성을 추가했어요.
    -   `MemberDto`에 createdAt 속성을 추가했어요.
    -   `ReportDto`에 createdAt 속성을 추가했어요.

-   Endpoint
    -   일정조율과 관련한 엔드포인트 정의를 추가했어요.
        -   추가된 엔드포인트: `PostMeet`, `GetMeet`, `PatchMeet`, `DeleteMeet`, `PostMeetResponse`, `PatchMeetResponse`, `DeleteMeetResponse`

## v0.5.7

-   엔드포인트
    -   `POST /auth/google`의 `ReqBody`에 `redirectUri` 추가

## v0.5.6

-   엔드포인트

    -   Calendar 관련 엔드포인트 추가

        ```typescript
        GET /calendars
        GET /calendars/:calendarId
        PATCH /calendars/:calendarId
        GET /calendars/:calendarId/events
        POST /calendars/:calendarId/events
        PATCH /calendars/:calendarId/events/:eventId
        DELETE /calendars/:calendarId/events/:eventId
        ```

## v0.5.5

-   엔드포인트
    -   `POST /files` 엔드포인트 변경

## v0.5.4

-   엔드포인트
    -   `PostFiles` 의 이름이 `PostFile` 로 변경되었습니다. (단순 오타 수정)

## v0.5.0

-   엔드포인트

    -   엔드포인트 변경

        -   `GET /users/:userId` → `GET /users/me`
        -   `PATCH /users/:userId` → `PATCH /users/me`
        -   `DELETE /users/:userId` → `DELETE /users/me`

    -   ADD: `POST /dev/access-token`, `POST /dev/auth`

    -   `/users` 관련 엔드포인트에서 `:userId` 가 `me` 로 대부분 대체되었습니다.

        일반적인 상황에서 자신이 아닌 다른 유저의 정보를 수정하거나 삭제할 일이 없고, 운영진의 경우 별도의 엔드포인트를 제공할 예정입니다.
