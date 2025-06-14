import { useReducer, useRef, createContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date().getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data]; // 새로운 일기를 추가
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id)
          ? { ...item, ...action.data }
          : item
      ); // 일기 수정
    case "DELETE":
      return state.filter((item) => item.id !== action.id); // 일기 삭제
    default:
      return state; // 기본 상태 반환
  }
}

// 일기 데이터 공급
const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4); // ID 생성용

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        // idRef.current를 사용하여 새로운 일기의 ID를 생성
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: { id, createdDate, emotionId, content },
    });
  };

  // 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    // Routes 안에는 Route 컴포넌트만 들어갈 수 있다.
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />

            <Route path="*" element={<Notfound />} />
            {/* Catch-all route for 404 Not Found */}
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
