const setTodos = (keyValue) => {
	window.localStorage["todos"] = JSON.stringify(keyValue);
};

const getTodos = () => {
	let keyData = JSON.parse(window.localStorage["todos"]);
	if (keyData === null || keyData === undefined) keyData = "";
	return keyData;
};

const clearTodos = () => {
	localStorage.removeItem("todos");
};