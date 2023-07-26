import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[],
  selectedTodo: Todo | null,
  setSelectedTodo: (todo: Todo) => void,
  isActive: boolean,
  setIsActive: (value: boolean) => void,
};

export const TodoList: React.FC<Props> = ({
  todos,
  selectedTodo,
  setSelectedTodo,
  isActive,
  setIsActive,
}) => {
  const handleSelectedTodo = (todo: Todo) => {
    setSelectedTodo(todo);
    setIsActive(true);
  };

  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <tr
            data-cy="todo"
            className={classNames({
              'has-background-info-light':
               selectedTodo?.id === todo.id && isActive,
            })}
            key={todo.id}
          >
            <td className="is-vcentered">{todo.id}</td>
            <td className="is-vcentered">
              {todo.completed && (
                <span className="icon" data-cy="iconCompleted">
                  <i className="fas fa-check" />
                </span>
              )}
            </td>
            <td className="is-vcentered is-expanded">
              <p className={classNames({
                'has-text-danger': !todo.completed,
                'has-text-success': todo.completed,
              })}
              >
                {todo.title}
              </p>
            </td>
            <td className="has-text-right is-vcentered">
              <button
                data-cy="selectButton"
                className="button"
                type="button"
                onClick={() => handleSelectedTodo(todo)}
              >
                <span className="icon">
                  <i className={classNames({
                    'far fa-eye': selectedTodo?.id !== todo.id,
                    'far fa-eye-slash': selectedTodo?.id === todo.id,
                  })}
                  />
                </span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
