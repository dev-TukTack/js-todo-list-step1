// const onChange = () => { console.log(">>"); }
//
// export const TodoInput = `
// 	<input
// 		onclick="${onChange()}"
//         id="new-todo-title"
//         class="new-todo"
//         placeholder="할일을 추가해주세요"
//         autofocus/>`;

import { setTodos, getTodos, clearTodos } from "../utils/Storage.js";

const $todoInput = document.querySelector("#new-todo-title");


$todoInput.addEventListener("keyup", ({key, currentTarget}) => {
	key === "Enter" && setTodoList(currentTarget.value);
});


const setTodoList = (value) => {
	setTodos(value);


	const aa = getTodos();

	console.log("aa ", aa)
}

