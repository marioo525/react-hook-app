import {PropTypes} from 'prop-types'
import { TodoItem } from "./TodoItem";

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        // TodoItem ....
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
        // FIN TodoItem
      ))}
    </ul>
  );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}