function Filter ({ setFilter }) {
    return (
        <div className="filter">
            <label htmlFor="dropdown">Filter todo list:</label>
            <select id="dropdown" onChange={ (e) => setFilter(e.target.value) }>
                <option value="all" defaultValue>All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
            </select>
        </div>
    )
}

export default Filter;