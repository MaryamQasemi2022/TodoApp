const todoReducer = (state, action) => {
  let updateTasks = []
  let notCompletedTasks = []
  let completedTasks = []

  switch (action.type) {
    case 'ADD':
      updateTasks = [
        { title: action.title, completed: action.completed, id: action.id },
        ...state,
      ]
      localStorage.setItem('AllTasks', JSON.stringify(updateTasks))
      return updateTasks

    case 'DELETE':
      updateTasks = state.filter((item) => item.id !== action.id)
      localStorage.setItem('AllTasks', JSON.stringify(updateTasks))
      return updateTasks

    case 'COMPLETE':
      updateTasks = state.map((item) => {
        if (action.id === item.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
      completedTasks = updateTasks.filter((item) => item.completed)
      notCompletedTasks = updateTasks.filter((item) => !item.completed)
      updateTasks = [...notCompletedTasks, ...completedTasks]
      localStorage.setItem('AllTasks', JSON.stringify(updateTasks))
      return updateTasks

    case 'EDIT':
      updateTasks = state.map((item) => {
        if (action.id === item.id) {
          return { ...item, title: action.titleInput }
        }
        return item
      })
      localStorage.setItem('AllTasks', JSON.stringify(updateTasks))
      return updateTasks
    default:
      localStorage.setItem('AllTasks', JSON.stringify(state))
      return state
  }
}

export default todoReducer
