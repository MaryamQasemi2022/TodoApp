import React, { useEffect, useMemo, useReducer, useState } from 'react'
import SearchTask from '../SearchTask/SearchTask'
import TaskList from '../TaskList/TaskList'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import FilterFooter from '../FilterFooter/FilterFooter'
import todoContext from '../../contexts/todo.context'
import todoReducer from '../../reducers/todo.reducers'

const TodoApp = () => {
  const [allTasks, dispatch] = useReducer(
    todoReducer,
    localStorage.getItem('AllTasks')
      ? JSON.parse(localStorage.getItem('AllTasks'))
      : []
  )
  const [filter, setFilter] = useState('All')
  const [filteredTasks, setFilteredTasks] = useState([])
  const [searchTasksTitle, setSearchTasksTitle] = useState('')
  const tasks = useMemo(
    () => ({
      allTasks,
      filteredTasks,
      searchTasksTitle,
      filter,
      setFilter,
      dispatchTodoes: dispatch,
      setSearchTasksTitle,
    }),
    [filteredTasks, allTasks, filter, searchTasksTitle]
  )
  useEffect(() => {
    if (filter === 'All') {
      setFilteredTasks(allTasks)
    }
    if (filter === 'Active') {
      setFilteredTasks(allTasks.filter((task) => !task.completed))
    }
    if (filter === 'Completed') {
      setFilteredTasks(allTasks.filter((task) => task.completed))
    }
  }, [allTasks, filter])

  useEffect(() => {
    setFilteredTasks(
      allTasks.filter((task) => task.title.includes(searchTasksTitle))
    )
  }, [searchTasksTitle])

  return (
    <todoContext.Provider value={tasks}>
      <>
        <div style={{ margin: '10px 0' }}>
          <AddTaskForm />
          <SearchTask />
        </div>

        <TaskList />

        <FilterFooter />
      </>
    </todoContext.Provider>
  )
}

export default TodoApp
