import { useRecoilValue } from "recoil";
import { todos } from "../store/atoms";
import { filteredList } from "../store/selectors";

const TodosRender = () => {
  const todoList = useRecoilValue(todos);
  const todoFilteredList = useRecoilValue(filteredList);
  return (
    <>
      <div>
        {todoFilteredList.length > 0 ? (
          <ul>
            {todoFilteredList.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
        ) : (
          <ul>
            {todoList.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TodosRender;
