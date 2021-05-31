export const getTodos = () => {
	if (window.localStorage["todos"] === undefined) return [];

	let keyData = JSON.parse(window.localStorage["todos"]);

	if (keyData === null || keyData === undefined) keyData = "";

	console.log("keyData ", keyData)

	return keyData;
};

export const setTodos = (keyValue) => {
	console.log("0 ", getTodos());

	let oriTodoArr = getTodos();
	let todoArr = oriTodoArr.push(keyValue);

	console.log("1 ", JSON.stringify(todoArr))

	window.localStorage["todos"] = JSON.stringify(todoArr);
};

export const clearTodos = () => {
	localStorage.removeItem("todos");
};
