const onChange = () => {
	console.log(">>");
}

export const TodoInput = `
	<input
		onkeyup="${onChange()}"
        id="new-todo-title"
        class="new-todo"
        placeholder="할일을 추가해주세요"
        autofocus/>`;
