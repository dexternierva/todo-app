import { useState, useRef, useEffect } from "react";
import TodoList from "../components/TodoList";
import Form from "../components/Form";
import Filter from "../components/Filter";

import "./App.css";

function App() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [filter, setFilter] = useState("all");
    const [formState, setFormState] = useState("create");
    const [error, setError] = useState("");
    const titleInputRef = useRef(null);
    const descInputRef = useRef(null);
    const dateInputRef = useRef(null);
    const [todos, setTodos] = useState([]);

    // HANDLE SUBMIT AND UPDATE
    const handleSubmit = function (event) {
        event.preventDefault();

        if (!title) {
            setError("Please enter a todo title");
            return;
        }

        if (!desc) {
            setError("Please enter a todo description!");
            return;
        }

        if (formState === "create") {
            setTodos((currentTodos) => {
                return [
                    ...currentTodos,
                    {
                        id: crypto.randomUUID(),
                        title: title,
                        desc: desc,
                        date: date,
                        completed: false,
                    },
                ];
            });

            setError("");
        } else {
            setTodos((currentTodos) => {
                return currentTodos.map((todo) => {
                    if (todo !== null && todo.id === selectedTaskId) {
                        return {
                            ...todo,
                            title: title,
                            desc: desc,
                            date: date,
                        };
                    }
                });
            });

            setError("");
            setFormState("create");
        }

        setTitle("");
        setDesc("");
        setDate("");
    };

    // TOGGLE COMPLETED
    const toggleTodo = function (id, completed) {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !completed };
                }

                return todo;
            });
        });
    };

    // HANDLE DELETE
    const handleDelete = function (id) {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id);
        });
    };

    // HANDLE UPDATE
    const handleEdit = function (id, title, desc, date) {
        setError("");
        setFormState("update");
        setTitle(title);
        setDesc(desc);
        setDate(date);
        setSelectedTaskId(id);

        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        if (titleInputRef.current) {
            titleInputRef.current.value = title;
            descInputRef.current.value = desc;
            dateInputRef.current.value = date;
        }
    }, [title, desc, date]);

    return (
        <div className="todo">
            <h1 className="todo__title">Todo App</h1>

            <div className="todo__form">
                <Form
                    handleSubmit={handleSubmit}
                    title={title}
                    desc={desc}
                    date={date}
                    setTitle={setTitle}
                    setDesc={setDesc}
                    setDate={setDate}
                    titleInputRef={titleInputRef}
                    descInputRef={descInputRef}
                    dateInputRef={dateInputRef}
                    formState={formState}
                    error={error}
                />
            </div>

            {todos.length > 0 ? <Filter setFilter={setFilter} /> : null}

            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                filter={filter}
            />
        </div>
    );
}

export default App;
