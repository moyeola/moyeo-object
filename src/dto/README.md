<p align="center">
  <img src="../../assets/moyeo_logo.png" width="10%" alt="Meyeo Logo" />
</p>
<h1 align="center">/dto</h1>
<h5 align="center">모여! 개발에 사용되는 DTO</h5>

---

## 개요

`/dto`는 모여! 에서 사용하는 기본적인 `DTO`를 모은 디렉토리입니다.

주로 `/endpoint`와 함께 사용합니다.

### `DTO` 란?

`DTO`는 Data Transfer Object의 약자로 계층 간 데이터 교환을 위해 사용하는 객체입니다.

`DTO`는 `프론트엔드 <-> 백엔드` 외에도 `백엔드 Controller <-> 백엔드 Service` 일 수 있는 등 다양한 계층에서 데이터를 정해진 형식으로 주고 받기 위해 사용됩니다.

### 프론트엔드에서의 사용

대부분의 경우 백엔드에서는 `Entity`를 그대로 클라이언트에 노출하지 않고, `DTO`를 통해 그 내용을 변형하여 클라이언트에게 전달합니다.

즉 대부분의 경우 프론트엔드에서는 `DTO`를 통해 값을 전달받게 됩니다.

### `/dto`와 `/endpoint`와의 관계

`/endpoint` 디렉토리 또한 `프론트엔드 <-> 백엔드` 간의 DTO를 포함하고 있습니다.

`/dto` 디렉토리는 API에 사용되는 `DTO`를 직접 정의하는 것보다는 `/endpoint` 에 여러번 사용하는 객체를 정의하는 디렉토리로 생각하면 편합니다.

## 개발 규칙

> **Note**
> 추가적인 개발 규칙을 작성하고 싶다면 언제든 이슈를 남겨주세요!
