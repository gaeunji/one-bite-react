# 📝 React Todo List Project

Section 8부터 11까지 학습하며 실습한 결과를 기록한 레포지토리입니다. 기본 UI 구현부터 상태 관리, 렌더링 최적화를 단계별로 적용하였습니다.

## 📚 학습 섹션별 내용

### 🔹 [Section09] 투두리스트 기본 UI 구현

- HTML/CSS를 활용한 기본 레이아웃 구성
- 입력창, 추가 버튼, 할 일 목록(List Item) 등 주요 UI 컴포넌트 설계
- 컴포넌트를 구조적으로 나누고 props로 데이터 전달

### 🔹 [Section10] useReducer를 이용한 상태 관리

- `useReducer` 훅으로 복잡한 상태 로직 관리
- `ADD`, `DELETE`, `TOGGLE` 등의 액션 정의 및 reducer 함수 구현
- 상태 관리 로직을 중앙에서 처리함으로써 코드 가독성 및 확장성 향상

### 🔹 [Section11] 최적화 (useMemo, React.memo, useCallback)

- `React.memo`를 이용해 할 일 항목(Item) 컴포넌트 리렌더링 최소화
- `useCallback`으로 이벤트 핸들러 함수 재생성을 방지하여 렌더링 성능 향상
- `useMemo`를 활용해 필터링된 리스트 등의 연산 결과를 메모이제이션

---

## 💡 주요 기능

- ✅ 할 일 추가 및 삭제
- 🔁 할 일 완료 상태 토글
- 🧠 불필요한 렌더링 최소화
- 📦 컴포넌트 기반 아키텍처
