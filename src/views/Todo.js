const Todo = (props) => {
  // let todos = props.todos
  let { todos, title } = props;
  const handleClickDelete = (id) => {
    props.deleteTodo(id)
  } 
  return (
    <div className="todos-container">
      <p>{title}</p>
      {todos.map((todo) => {
        return (
          <li className="todo-child" key={todo.id}>
            {todo.title}
            &nbsp; <button onClick={() => handleClickDelete(todo.id)}>x</button>
          </li>
        );
      })}
      <hr />
    </div>
  );
};

export default Todo;
