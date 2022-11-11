
const Todo = (props) => {
    // properties
    // parent => child , top => bottom
    const { todos, title, deleteDataTodos } = props;
    const handleDelete = (id) => {
        deleteDataTodos(id)
    }
    return (
        <div className="todos-container">
            <div className="title">
                {title}
            </div>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <li className="todo-chill">{todo.title}
                            &nbsp;&nbsp;<span onClick={() => handleDelete(todo.id)}>x</span>
                        </li>
                    </div>
                )
            })}
            <hr />
        </div>

    )
}
export default Todo