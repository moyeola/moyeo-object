<p align="center">
  <img src="assets/moyeo_logo.png" width="10%" alt="moyeo Logo" />
</p>
<h1 align="center">moyeo-object</h1>
<h5 align="center">모여! 개발을 위한 오브젝트(Dto, Entity) 라이브러리</h5>
<p align="center">
    <a href="LICENSE"><img alt="GPLv3 License" src="https://img.shields.io/badge/License-GPLv3-blue"/></a>
  <img alt="Language" src="https://img.shields.io/badge/Language-Typescript-blue?logo=typescript"/>
</p>

---

## 개요

`대학생을 하나로 모아주는 모여!`의 개발 편리성을 위해 `Entity`, `Dto`, `Constant`등을 분리한 라이브러리입니다.

### Install

```
npm install moyeo-object

yarn add moyeo-object
```

### Usage

```typescript
// 아직 작성중인 내용입니다.
```

## 라이브러리 소개

`moyeo-object` 라이브러리는 크게 6가지로 분류되어 사용됩니다.

-   `dto`: 서비스에서 반복되어 사용되는 DTO (Data Transfer Object)
-   `endpoint`: 서비스 API의 Endpoint DTO와 정보를 담은 객체
-   `type`: 서비스에 사용되는 Type

각 객체들은 서로 연관관계를 가지고 있을 수 있습니다. (ex. endpoint에서 dto를 참조)

### 분류별 문서

각 분류별 개발, 사용 방법은 해당 디렉토리의 `README.md`를 참고해주세요.

-   [dto 문서](/src/dto/README.md)
-   [endpoint 문서](/src/endpoint/README.md)
-   [type 문서](/src/type/README.md)

## Q&A

### 이렇게 오브젝트를 별도의 라이브러리로 분리하는 이유가 뭔가요?

`moyeo-object` 처럼 프로젝트에 사용되는 객체와 타입을 분리할 경우 동일한 데이터에 대해 코드를 여러번 작성하지 않아도 됩니다. 이를 통해 데이터의 일관성과 개발의 편리성을 챙길 수 있습니다.

-   동일한 데이터를 다루기 위해 코드를 재작성할 필요가 없습니다.
-   타입 등이 변경되었을 때 라이브러리를 업데이트하여 타입 검사를 할 수 있습니다.
-   타입의 변화를 버전을 통해 추적할 수 있습니다.

### 이 방법이 일반적으로 사용하는 방법인가요?

일반적인 프로젝트에서는 이 방법을 사용하지 않을 가능성이 큽니다.

-   프론트엔드와 백엔드가 모두 타입스크립트를 사용해야 합니다.

`모여!` 의 경우 프론트엔드로 `React`를 사용하고, 백엔드로 `NestJS`를 사용합니다. 두 라이브러리/프레임워크 모두 타입스크립트를 통해 작성되므로, FE와 BE에서 중복으로 작성되는 코드를 별도의 라이브러리로 분리할 수 있습니다.

그러나 일반적인 프로젝트의 경우 프론트엔드와 백엔드가 서로 다른 언어를 사용하는 경우도 많아 `moyeo-object`와 같은 방법을 사용하지 못할 수 있습니다.

-   `moyeo-object`에 대한 의존성으로 인해 유연성이 감소합니다.

일반적인 프로젝트에서는 데이터 타입을 해당 프로젝트 내에서 관리하므로, 데이터가 변경되었을 때 프로젝트에서 직접 수정하면 됩니다. 그러나 `moyeo-object`와 같은 구조를 사용할 경우 타입을 외부에서 관리하므로 `코드 수정 -> PR -> Merge -> NPM Deploy` 의 과정을 거쳐야 하므로 번거러울 수 있습니다.

다만 이 문제는 데이터에 대한 일관성을 높이기 위한 어쩔 수 없는 부분입니다.

이러한 유연성 문제를 해결하기 위해서는 **팀원간의 소통**이 굉장히 중요합니다. 속성을 변경해야하는 경우 최대한 하위호환성을 고려하여 변경하고, 만약 하위호환성을 확보할 수 없다면 소통을 통해 마이그레이션을 위한 작업을 해야 합니다. 만약 팀의 규모가 커 이러한 소통이 어렵다면 `moyeo-object` 같은 구조를 추천하기 어려울 수 있습니다.

다행히 `모여!`팀은 디자이너 한 분과 FE 개발자 한 분, 그리고 FE&BE 개발자로 구성되어 있어 개발에 대한 소통을 원활하게 진행할 수 있습니다.
