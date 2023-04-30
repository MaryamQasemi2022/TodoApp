import React, { useContext } from 'react'
import './TaskList.css'
import { TaskListItem } from '../index'
import todoContext from '../../contexts/todo.context'

const TaskList = () => {
  const { filteredTasks } = useContext(todoContext)
  return (
    <ul className="taskList">
      {filteredTasks &&
        filteredTasks.length > 0 &&
        filteredTasks.map((task) => (
          <TaskListItem key={task.id} Data={JSON.stringify(task)} />
        ))}
    </ul>
  )
}

export default TaskList
