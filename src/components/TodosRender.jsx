import { useRecoilValue } from "recoil";
import { todos } from "../store/atoms";

const TodosRender = () => {
  const todoList = useRecoilValue(todos);
  console.log(todoList);
  return (
    <>
      <div>
        {todoList.length > 0 ? (
          <ul>
            {todoList.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
        ) : (
          <div> No List Available</div>
        )}
      </div>
    </>
  );
};

export default TodosRender;
