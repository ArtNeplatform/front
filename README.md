

## 🛠 기술 스택 및 선정 이유 (Tech Stack)

| 역할                     | 기술                                                                                                                                                                                                                              | 선정 이유                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Library**              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                                | 팀원 대다수가 React 를 선호하였고, CSR 기반으로 작동하며, 초기 렌더링 이후 모든 페이지가 클라이언트에서 동작하도록 설계할 수 있도록 SPA 중심 개발을 할 수 있는 리액트를 선택하게 되었다.                                                                                                                                                                     |
| **Programming Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)                                                                                                                 | 타입을 보장하여 코드의 안정성을 높이고, 디버깅 시에, 보다 더 빠르게 버그를 잡고서, 자동 완성을 통한 DX 증가를유지 보수를 좋게 하기 위함.                                                                                                                                                                                                                                                                                                                    |
| **Styling**              | ![Vanilla Extract CSS](https://img.shields.io/badge/Emotion-000000?style=for-the-badge)                                                                                    | Styled-Component 와 같은 방식으로 공통 컴포넌트 및 개별 컴포넌트를 작성한다. props 에 따른 동적인 변화를 주기에 가장 편리하다고 생각하고, styled-component의 방식을 쓰되, 더 번들 사이즈가 적다는 이유로 CSR 방식에 적합하다고 생각하여 택하였다. <br>                                                                                                                                                              |
| **Data Fetching**        | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white) ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=React%20Query&logoColor=white) | Axios: 자동으로 JSON 형태의 데이터를 파싱해주며, HTTP 요청에 대해 효율적인 처리를 제공한다. 또한 우리 프로젝트에서 token을 활용할 때 interceptor등의 기능을 활용할 수 있기 때문에 선택하였다. <br/>TanStack Query: 쿼리 키를 이용해 캐싱 기능을 활용한 다양한 동작을 구현할 수 있고, API 요청 수행을 위한 규격화된 방식을 제공하기 때문에 가독성을 높여준다. 그 중 가장 높이 산 점은 Suspense를 통한 전역 로딩 상태관리를 편리하게 관리하기 위해서 택하게 되었다. 
| **Formatting**           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)                | 코드 일관성을 유지하고, 가독성을 높이며, 스타일 컨벤션을 통합적으로 관리 하기 위해 택하였다. vite 내 설정을 통해서 build 단계에서도 eslint 를 통해 에러릴 미리 방지한다.                                                                                                                                                                                                                                                                                                                                |
| **Package Manager**      | ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)                                                                                                                                   | 심볼릭 링크를 통해 중복 저장되어 용량이 절감되는 문제를 해결할 수 있다. 또한 의존성 설치 없이 (zero-install) 사용하게 되면서 빌드와 배포 시간을 크게 단축시켜준다.                                                                                                                                                                                                         |
| **Version Control**      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)                  | 협업에서 필요한 버전 관리 시스템을 도입하기 위함.                                                                                                                                                                                                                                                                                                                                                      |
| **Deployment**           | ![S3](https://img.shields.io/badge/CloudFront-FF9900?style=for-the-badge&logo=amazonwebservices&logoColor=white)                                                                                                                             |  비용 절감을 위해 AWS S3 정적 배포 후에 CloudFront 를 http 를 https 로 리다이랙팅을 하는 것을 통해 배포하였다.                                                                                                                                                                                                                                                                                    |

<br />
<br/>

## 📢 Git/GitHub 컨벤션

### Git 브랜치 전략 (GIit Flow)

1. **`main(=master)`** : 배포 및 최종 브랜치 배포는 추후에 CLI로 하겠습니다
2. **`feat(=feature)/#이슈번호 `** : 각 작업물을 분기해 새로 만들어 사용할 브랜치


<img width="822" alt="image" src="https://github.com/user-attachments/assets/eda72411-445f-47bf-b98c-b9ca0df6a3b9" />


<br />

### 커밋 네이밍 컨벤션

**Commit 메시지 종류 설명**

| 제목               | 내용                                                            |
| ------------------ | --------------------------------------------------------------- |
| `Init`             | 초기 세팅 (초기 이후는 setting 사용)                            |
| `Setting`          | 패키지 설치, 개발 설정                                          |
| `Feat`             | 새로운 기능 추가 / 퍼블리싱                                     |
| `Fix`              | 버그 수정                                                       |
| `Style`            | CSS 등 사용자 UI 디자인 변경                                    |
| `Refactor`         | 프로덕션 코드 리팩토링 및 QA 반영                               |
| `Chore`            | 빌드 테스트 업데이트, 패키지 매니저 설정, 주석 추가 (기능에 무관할 경우 작성)
| `Deploy`           | 배포 작업                                                       |
| `Test`             | 테스트 추가, 테스트 리팩토링 (프로덕션 코드 변경 X)             |
| `Delete`           | 파일 삭제 작업만 수행                                           |
| `!HOTFIX`          | 급하게 치명적인 버그 수정                                       |
| `!BREAKING CHANGE` | 커다란 API 변경                                                 |

<br />
<br/>

## 📢 폴더 구조

1. **`src/`** 아래 폴더는 전부 common(공통)의 의미로 생각한다.
2. **`pages/`** 아래 세부 폴더(components, constants 등등)가 각각 위치한다. - 제거하기 쉬운 코드가 좋은 코드라고 생각합니다. 따라서 공통으로 사용하는 컴포넌트가 있을 시엔, common 내에 개발하고 그 외에는 각각의 pages 내에서 개발을 진행합니다!! 

```
└── 📁src
    └── 📁apis
        └── axios.ts
        └── error.ts
        └── 📁Example
            └── artist.ts
            └── type.ts
        └── type.ts
    └── 📁assets
        └── 📁png
        └── 📁svg
    └── 📁components
        └── 📁common
    └── 📁constants
        └── mocks.ts
        └── queryKeys.ts
    └── 📁contexts
        └── authContext.tsx
        └── 📁query
            └── getQueryClient.ts
            └── QueryClientProvider.tsx
    └── 📁hooks
        └── 📁apis
            └── useGetArtistList.ts
        └── 📁common
            
    └── 📁pages
        └── 📁home
            └── index.tsx
            └── 📁components
            └── 📁hooks
            └── 📁utils
        └── 📁notFound
            └── index.tsx
            └── 📁components
            └── 📁hooks
            └── 📁utils
        └── 📁test
            └── index.tsx
            └── 📁components
            └── 📁hooks
            └── 📁utils
    └── 📁styles
        └── global.tsx
        └── text.tsx
        └── theme.ts
    └── 📁test
        └── 📁TestComponent
            └── index.style.ts
            └── index.tsx
    └── 📁types
        └── artist.ts
    └── 📁utils
    └── App.tsx
    └── main.tsx
    └── router.tsx
    └── vite-env.d.ts
```

<br/>
<br/>

## 📢 네이밍 컨벤션

 <details> 
	 
 ### 1. 기본 (Default)

1. 컴포넌트 / class `PascalCase`
2. 폴더명 `carmelCase`
3. 파일 명 _(컴포넌트 제외)_ `carmelCase`
4. 변수, 함수 `carmelCase`
5. 파라미터 `carmelCase`
6. 상수 `BIG_SNAKE_CASE`

<br/>

### 2. 타입 (Type)

1. interface는 컴포넌트 내의 타입을 지정할 때 사용합니다. 이 때는 필수로 `Component명 + Props`로 작성합니다.
   - 예시
    ```tsx
        interface AuthorProfileProps {
          AuthorName: string;
          artworkCount: number;
          exhibitionCount: number;
          profileImage: string;
        }
    ```
2. type은 Schema를 먼저 지정할 때 사용합니다. 이 때는 필수로 `T + 타입명`으로 작성합니다.
   - 예시
    ```tsx
        export type TArtist = {
          artistId: number;
          name: string;
        };
    ```
4. PropsTypes는 컴포넌트 파일 내 / 그 외 타입은 src/types 폴더에 따로 분리

<br/>

### 3. 스타일 (Style)

1. SVG 파일 사용시
   1. svgr로 컴포넌트화 후 사용하므로 컴포넌트처럼 svg이름을 변환하여 사용한다.

<br/>

### 4. 함수

1. 이벤트 핸들러 네이밍 **`handle + 기능 + 이벤트`**

   - 예시
     ```jsx
     const handleBtnClick = () => {};
     const handleTabChange = () => {};
     ```

   → props로 넘길 때 key값은 **`on + 이벤트`**

   - 예시
     ```jsx
     const BoxComponent = () => {
       return <memoComponent onClick={handleBtnClick} />;
     };
     ```

2. 유틸(utils) 함수 네이밍 **`동사(기능) + 명사(대상)`**
3. 값이 boolean일 경우는 **`is + 상태` (default)**

   - 예시
     ```tsx
     const [isLogined, setIsLogined] = useState(false);
     ```

   → 추가적으로 **`can / should / has`** 정도를 상황에 맞게 추가한다.

4. api 함수 **`HTTP 메서드 + 명사`**
   - 예시
     ```tsx
     const getList = () => {};
     const getMovie = () => {};
     ```
5. 네이밍 시 단수를 기본으로 사용하고 / 복수면 뒤에 List 키워드를 붙인다.

<br/>

### 5. 기타

1. assets (Icon이나 Img)의 경우 피그마 네이밍을 적극 활용한다.

   **→** `Ic + 피그마 네이밍` (icon의 경우)으로 사용

2. URL, HTML 같은 범용적인 대문자 약어는 대문자 그대로 사용한다.
3. 변수/최대한 직관적으로 작성하여 네이밍을 보고도 무슨 데이터, 행위인지 바로 유추할 수 있도록 한다.
   - 주석이 필요한 경우에는 어떤 역할을 하는지 다른 사람이 이해할 수 있도록 작성한다.
   - 변수/함수 명은 20자 미만, 주석으로 변수 설명
4. 주석은 작성하려고 하는 대상 **바로 위**에 작성

<br/>
<br/>

 </details>


## 📢 코딩 (개발) 컨벤션

 <details> 

### 주석 
- 주석은 작성하려고 하는 대상 **바로 위**에 작성
- /** */ 형식으로 작성
- 주석은 되도록이면 코드 자체로 이해가 되도록 작성한다.
- params 또는 return 값이 있는 경우에는 주석으로 작성한다.
- 누군가가 이 코드를 보았을 때, 이 코드가 무슨 역할을 하는지 이해할 수 있도록 작성한다.
- @author 태그를 통해 작성자를 표시한다.
  - 예시
    ```tsx
        /**
        * ErrorBoundary 컴포넌트로 에러가 떴을 당시에, 표시할 컴포넌트를 정의합니다.
        * @param children 자식 컴포넌트
        * @param errorFallback 에러 발생 시 표시할 컴포넌트
        * @param onReset 에러 발생 시 호출될 함수
        * @author 홍규진
        */
    ```
### 변수

- var 금지.
- `const` → `let` 순서로 위부터 선언.
- 변수를 조합하여 문자열 생성시 “+ “ 금지. → 리터럴 사용(백틱 ```)
- 변수명 : 의미를 확실히 나타낼 수 있도록
  - 예시 : 배열에 Arr 보다는 변수s = fruits, userlists 등등
- 줄임말 쓰지말기. 이름이 길어지더라도 어떤 변수인지 정확하게
  - 예시 : Btn X → Button으로 사용
- map 사용시 변동되는 리스트라면 key값을 고유하게 잘 설정해주기 **`index 사용 금지`**
  - 서버에서 내려주는 id값 or uuid 사용
- **전역 변수**는 되도록 사용하지 않기

### 함수

- 화살표 함수. function 키워드 쓰지말기
- 여러 컴포넌트 내에서 사용하는 함수는 utils 폴더에 모아서 재사용한다.그 외는 pages내에서 컴포넌트로 쓸 떄만 작성한다.
- 변수/함수 명은 20자 미만.
  - 최대한 네이밍에 의미를 담아서 작성하고 필요 시에 주석으로 설명 추가
- 필요하다면 early return 패턴을 적극적으로 활용
  - 예시
    ```jsx
    **// early return 패턴**
    function processUser(user) {
      if (!user || !user.isActive) return; // **조건이 맞지 않으면 일찍 반환**
      // 나머지 처리 코드...
    }
    ```

### 컴포넌트

- `rafce` → 고정
- 의미없는 div 또는 컴포넌트 최상단은 fragment 사용하기

```jsx
const InfoText = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <p>This our new page, we're glad you're are here!</p>
    </>
  );
};
```

- children이 불필요할 땐 selfClosing사용하기 `<Component/>`
- children 적극적으로 활용하기!

### 타입

- object → interface
- 단일 변수 → type alias
- 컴포넌트 인자에 대한 타입은 컴포넌트 상단에
- 그 외의 타입들은 types 폴더에
- api response 타입명은 OOOResponseTypes

### 메소드

- 배열 복사 시 → 스프레드 연산자(…) 사용

  - `const copys = […originals]`

- for 보단, `forEach`/`map`을 사용
- 구조 분해 할당을 적극 이용
  ```tsx
  interface userDataProps {
    userName: string;
    userBirth: string;
  }

  function checkIsUser({ userName, userBirth }: userDataProps) {}
  ```
- 불필요한 반복문 지양 : filter, array.include() 등
  - 조건부로 데이터를 확인하거나 뽑아야하는 로직을 사용할 때에는 `Map` 이나 `Object`처럼 `key`값을 이용해서 원소를 찾는 자료형을 이용하는것을 고려해보거나, 배열을 순회하지 않고 index로 바로 접근할 수 있는 방법이 없는지 고려.
 


### Style

- 최대한 이미 있는 공통 컴포넌트를 활용할 수 있도록 노력한다.
- styledcomponent 말고, emotion 사용할 수 있도록 신경쓴다.
- props로 전달받아야 하는 값들이 있을 경우엔 주석을 통해서 알기 쉽게 도와준다.
- 컴포넌트 내에서 사용하는 스타일은 따로 index.style.ts 내에서 작성한다.
- font-size는 모두 픽셀 단위로 작성한다. (rem 사용 금지)


### 기타

- button 태그에 **`type`**은 명시적으로 작성
- 비교 연산자는 **`===`**와 **`!==`**만을 사용
- axios 안에서 **`then/catch`** 대신 **`async/await`** 지향

    </details>
