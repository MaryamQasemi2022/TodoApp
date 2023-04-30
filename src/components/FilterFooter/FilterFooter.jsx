import React, { useContext } from 'react'
import './FilterFooter.css'
import todoContext from '../../contexts/todo.context'

const FilterFooter = () => {
  const { setFilter, filter, allTasks, filteredTasks } = useContext(todoContext)
  return (
    <div className="filterFooter">
      <h3 className="heading heading_3">
        {filteredTasks.length} | {allTasks.length}
      </h3>
      <ul>
        <li>
          <button
            type="button"
            className={filter === 'All' ? 'active' : ''}
            onClick={() => {
              setFilter('All')
            }}
          >
            {' '}
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={filter === 'Active' ? 'active' : ''}
            onClick={() => {
              setFilter('Active')
            }}
          >
            {' '}
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            className={filter === 'Completed' ? 'active' : ''}
            onClick={() => {
              setFilter('Completed')
            }}
          >
            {' '}
            Completed
          </button>
        </li>
      </ul>
    </div>
  )
}
export default FilterFooter
