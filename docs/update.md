# Update

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
