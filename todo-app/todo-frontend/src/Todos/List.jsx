import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map(todo => (
        <React.Fragment key={todo._id}>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
            <Todo
              todo={todo}
              onDelete={onClickDelete(todo)}
              onComplete={onClickComplete(todo)}
            />
          </div>
        </React.Fragment>
      ))}
    </>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  })).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
}


export default TodoList
