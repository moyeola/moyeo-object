<p align="center">
  <img src="../../assets/moyeo_logo.png" width="10%" alt="moyeo Logo" />
</p>
<h1 align="center">/endpoint</h1>
<h5 align="center">모여! 엔드포인트 정보와 관련 DTO</h5>

---

## 개요

`/endpoint`는 모여!의 엔드포인트 정보를 모은 디렉토리입니다.

## 개발 규칙

> **Note**
> 추가적인 개발 규칙을 작성하고 싶다면 언제든 이슈를 남겨주세요!

-   엔드포인트는 다음과 같은 형식으로 작성해주세요. `~ReqBody`, `~ReqQuery`, `~ReqPath` 중 사용하지 않는 타입은 안 작성해도 됩니다.

    ```typescript
    /**
     * POST /endpoint/:endpointId
     * 가이드 작성을 위한 엔드포인트입니다.
     */
    export const PostEndpoint: Endpoint<PostEndpointReq, PostEndpointRes> = {
        method: "POST",
        path: (e) => `/endpoint/${e.endpointId}`,
        bodyParams: ["body"],
        queryParams: ["query"],
        pathParams: ["endpointId"],
    };

    export interface PostEndpointReqBody {
        body: string;
    }
    export interface PostEndpointReqQuery {
        query: string;
    }
    export interface PostEndpointReqPath {
        endpointId: string;
    }
    export type PostEndpointReq = PostEndpointReqBody &
        PostEndpointReqQuery &
        PostEndpointReqPath;
    export interface PostEndpointRes {}
    ```

-   가능한 경우 `/dto`의 객체를 사용하여 구현해주세요.

    ```typescript
    type GetUserRes = UserDto & {
        groups: GroupDto[];
    };
    ```
