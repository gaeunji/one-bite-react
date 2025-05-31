import "./List.css";
import TodoItem from "./TodoItem";
import { useMemo, useState, useContext } from "react";
import { TodoStateContext } from "../App"; // TodoContext 가져오기

const List = () => {
  const todos = useContext(TodoStateContext); // TodoContext에서 데이터 가져오기
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  // useMemo는 인수로 전달한 함수를 실행하고, 그 결과를 메모이제이션하여
  // 의존성 배열이 변경될 때만 다시 계산한다.
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]); // todos 배열이 변경될 때만 다시 계산

  return (
    <div className="List">
      <h4>Todo List ✨</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>not done: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
