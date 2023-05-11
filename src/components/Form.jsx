import { FaPlus, FaRegEdit, FaExclamationCircle } from "react-icons/fa";

function Form({
    handleSubmit,
    title,
    desc,
    date,
    setTitle,
    setDesc,
    setDate,
    titleInputRef,
    descInputRef,
    dateInputRef,
    formState,
    error
}) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex-container todo__form-fields">
                <fieldset className="flex-container todo__form-fieldset">
                    <label>Todo Title</label>
                    <input
                        type="text"
                        placeholder="Enter todo title here."
                        onChange={(event) => setTitle(event.target.value)}
                        value={title}
                        ref={titleInputRef}
                    />
                </fieldset>
                <fieldset className="flex-container todo__form-fieldset">
                    <label>Todo Description</label>
                    <textarea
                        onChange={(event) => setDesc(event.target.value)}
                        value={desc}
                        ref={descInputRef}
                    ></textarea>
                </fieldset>
                <fieldset className="flex-container todo__form-fieldset">
                    <label>Set Due Date (Optional)</label>
                    <input
                        type="date"
                        onChange={(event) => setDate(event.target.value)}
                        value={date}
                        ref={dateInputRef}
                    />
                </fieldset>
            </div>
            <div className="todo__form-btn mt-2rem">
                {error && <p className="error"><FaExclamationCircle /> {error}</p>}
                <button 
                    className = { formState == "create" ? "btn btn--add" : "btn btn--update"}
                >
                    {formState == "create" ? (
                        <>
                            Add Todo <FaPlus />
                        </>
                    ) : (
                        <>
                            Update Todo <FaRegEdit />
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}

export default Form;
