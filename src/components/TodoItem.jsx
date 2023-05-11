import Controls from "./Controls";
import { FaCalendarCheck,  FaCalendarTimes } from "react-icons/fa";

function TodoItem({ id, title, desc, date, completed, toggleTodo, handleDelete, handleEdit }) {
    return (
        <li key={id} className="todo-list__item">
            <div className={completed ? "todo-list__content done" : "todo-list__content"}>
                <h3 className="todo-list__title">{title}</h3>
                <p className="todo-list__desc">{desc}</p>
                {date ? (
                    <p className="todo-list__date">
                        <FaCalendarCheck /> {date}
                    </p>
                ) : (
                    <p className="todo-list__date">
                        <FaCalendarTimes /> 'No due date'
                    </p>
                )}
            </div>
            <div className="todo-list__controls">
                <Controls 
                    id={id}
                    title={title}
                    desc={desc}
                    date={date}
                    completed={completed}
                    toggleTodo={toggleTodo}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            </div>
        </li>
    );
}

export default TodoItem;
