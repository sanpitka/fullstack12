import PropTypes from 'prop-types'

const Todo = ({ todo, onDelete, onComplete }) => {
  return (
    <>
      <span data-testid="todo-text">{todo.text}</span>

      {todo.done ? (
        <>
          <span>This todo is done</span>
          <span>
            <button onClick={() => onDelete(todo)}> Delete </button>
          </span>
        </>
      ) : (
        <>
          <span>This todo is not done</span>
          <span>
            <button onClick={() => onDelete(todo)}> Delete </button>
            <button onClick={() => onComplete(todo)}> Set as done </button>
          </span>
        </>
      )}
    </>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Todo