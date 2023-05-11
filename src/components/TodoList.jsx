import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, handleDelete, handleEdit, filter }) {

    return (
        <ul className="todo-list">
            {todos && todos.length > 0 ? (
                todos
                    .filter((todo) => {
                        return filter === "all"
                            ? true
                            : filter === "completed"
                            ? todo.completed === true
                            : todo.completed === false;
                    })
                    .map((todo) => {
                        return (
                            <TodoItem
                                {...todo}
                                key={todo.id}
                                toggleTodo={toggleTodo}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            />
                        );
                    })
            ) : (
                <h3 className="no-todo">No Todos! 🤔</h3>
            )}
        </ul>
    );
}

export default TodoList;
