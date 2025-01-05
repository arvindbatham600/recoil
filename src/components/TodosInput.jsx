import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todos } from "../store/atoms";

const TodosInput = () => {

    const [todoInput, setTodoInput] = useState("");
    const setTodos = useSetRecoilState(todos)
    
    const handleChange = (e) => {
        setTodoInput(e.target.value);
    }

    const addTodo = () => {
        setTodos((todo) => [
            ...todo,
            {
                id: Date.now(), text: todoInput
            }
        ])
    }
    
    return (
        <>
            <div>
                <input type="text" value={todoInput} onChange={handleChange}/>
                <button disabled = {!todoInput}  onClick={addTodo}>Add</button>
            </div>
        </>
    )
}

export default TodosInput;