import React, { useRef, useContext, useEffect } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'
import { Input } from '../index'
import todoContext from '../../contexts/todo.context'
import './AddTaskForm.css'

const AddTaskForm = () => {
  const { dispatchTodoes, setFilter } = useContext(todoContext)
  const TaskTitleRef = useRef(null)
  const handleAddTask = (e) => {
    if (e) {
      e.preventDefault()
    }
    if (TaskTitleRef.current.value && TaskTitleRef.current.value !== ' ') {
      dispatchTodoes({
        type: 'ADD',
        title: TaskTitleRef.current.value,
        completed: false,
        id: uuidv4(),
      })
      setFilter('All')
      TaskTitleRef.current.value = ''
    }
  }
  useEffect(() => {
    TaskTitleRef.current.focus()
  }, [])

  return (
    <form onSubmit={handleAddTask} style={{ margin: '10px 0' }}>
      <div className="container_form">
        <Input
          type="text"
          placeholder="what needs to do ?"
          InputRef={TaskTitleRef}
          handleChange={() => {}}
        />
        <button type="submit">
          <BsPlusLg />
        </button>
      </div>
    </form>
  )
}

export default AddTaskForm
