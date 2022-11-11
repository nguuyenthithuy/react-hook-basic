
const Todo = (props) => {
    // properties
    // parent => child , top => bottom
    const todos = props.myData
    return (
        <div className='todos-container'>
            {todos.map((todo) => {
                return (
                    <li className='todo-chill' key={todo.id}>{todo.title}</li>
                )
            })}
        </div>
    )
}
export default Todo