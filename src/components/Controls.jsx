import { FaCheck, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

function Controls({
    id,
    title,
    desc,
    date,
    completed,
    toggleTodo,
    handleDelete,
    handleEdit,
}) {
    return (
        <ul className="flex-container controls">
            <li>
                <button
                    className="btn-icon btn-icon--complete vh-center"
                    onClick={() => toggleTodo(id, completed)}
                >
                    <FaCheck />
                </button>
            </li>
            <li>
                <button
                    className="btn-icon btn-icon--edit vh-center"
                    onClick={() => { handleEdit(id, title, desc, date); }}
                >
                    <FaRegEdit />
                </button>
            </li>
            <li>
                <button
                    className="btn-icon btn-icon--delete vh-center"
                    onClick={() => handleDelete(id)}
                >
                    <FaRegTrashAlt />
                </button>
            </li>
        </ul>
    );
}

export default Controls;
