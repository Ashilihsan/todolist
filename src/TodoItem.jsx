export function TodoItem({completed,id,title,toggleTodo,deleteTodo}) {
    return(
        <li >
        <label>
          <input  type="checkbox" checked={completed} onChange={e =>toggleTodo(id,e.target.checked)}/>
          {title}
          </label>
          <buttom onClick={()=>deleteTodo(id)} className="btn btn-danger">Delete</buttom>
      </li>
    )
}