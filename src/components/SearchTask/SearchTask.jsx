import React, { useRef, useContext } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Input } from '../index'
import todoContext from '../../contexts/todo.context'

const SearchTask = () => {
  const { setSearchTasksTitle, setFilter } = useContext(todoContext)
  const InputRef = useRef(null)

  const handleSearchTask = (taskTitle) => {
    setFilter('All')
    setSearchTasksTitle(taskTitle)
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div className="container_form">
        <Input
          type="text"
          placeholder="what needs to search ?"
          InputRef={InputRef}
          handleChange={(taskTitle) => handleSearchTask(taskTitle)}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </div>
    </form>
  )
}

export default SearchTask
