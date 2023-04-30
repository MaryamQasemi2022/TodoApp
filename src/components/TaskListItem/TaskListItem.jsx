import React, { useContext, useRef, useState } from 'react'
import { BsTrash3Fill } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import './TaskListItem.css'
import PropTypes from 'prop-types'
import todoContext from '../../contexts/todo.context'

const TaskListItem = ({ Data }) => {
  const data = JSON.parse(Data)
  const { id, title, completed } = data
  const InputRef = useRef(null)
  const EditBtnRef = useRef(null)
  const [titleInput, setTitleInput] = useState(title)
  const { dispatchTodoes } = useContext(todoContext)
  const handleCompleteTask = (taskId) => {
    dispatchTodoes({ type: 'COMPLETE', id: taskId })
  }
  const handleDeleteTask = (taskId) => {
    dispatchTodoes({ type: 'DELETE', id: taskId })
  }

  const handleEditBtn = (e) => {
    e.currentTarget.classList.add('clicked')
    InputRef.current.removeAttribute('readOnly')
    InputRef.current.focus()
  }
  const handleOkBtn = (taskId) => {
    EditBtnRef.current.classList.remove('clicked')
    InputRef.current.setAttribute('readOnly', true)
    InputRef.current.blur()
    dispatchTodoes({ type: 'EDIT', id: taskId, titleInput })
  }
  return (
    <li className="TaskListItem">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleCompleteTask(id)}
      />
      <input
        type="text"
        readOnly
        className="heading heading_3"
        value={titleInput}
        ref={InputRef}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <button
        type="button"
        ref={EditBtnRef}
        className="edit green"
        onClick={handleEditBtn}
      >
        <FaRegEdit />
      </button>
      <button
        type="button"
        className="ok green"
        onClick={() => handleOkBtn(id)}
      >
        ok
      </button>
      <button
        type="button"
        className="delete red"
        onClick={() => handleDeleteTask(data.id)}
      >
        <BsTrash3Fill />
      </button>
    </li>
  )
}

TaskListItem.propTypes = {
  Data: PropTypes.string.isRequired,
}
export default TaskListItem
