import React, {useState, useEffect} from 'react'
import api from './services/api'
import TodoList from './components/TodoList';
import TodoListItem from './components/TodoListItem';
import ModalForm from './components/ModalForm';


function App() {
  const [modalActive, setModalActive] = useState(false)
  const [taskList, setTaskList] = useState([])
  const [newTask, setNewTask] = useState({
    title: '',
    id: '',
    isDone: false
  })

  useEffect(() => {
    api.get('').then( resp => setTaskList(resp.data))
  }, [])

  function showModalForm() {
    setModalActive(!modalActive)
  }

  function onChange (changes) {
    setNewTask({
      ...newTask,
      ...changes
    })
  }

  function onSaveTask(task) {
   task.id 
   ? updateTask(task)
   : createTask(task)
   setNewTask({})
  }

  function createTask(task) {
    task.id = Date.now()
    api.post('', task).then(resp => setTaskList([...taskList, resp.data]))
  }

  function updateTask(task) {
    api.put(task.id, task).then(resp => {
      setTaskList(taskList.map(item => item.id === resp.data.id ? resp.data : item))
    })
  }

  function onDeleteTask(item) {
    api.delete(item.id).then((resp) => {
      setTaskList(taskList.filter(item => item.id !== resp.data.id))
    })
  }

  function onEditTask(item) {
    setModalActive(true)
    setNewTask({
      title: item.title,
      isDone: false,
      id: item.id
    })
  }

  function onToggle(task) {
    const toggleTask = taskList.find((item) => {
      return  item.id === task.id
    })
    toggleTask.isDone = !toggleTask.isDone
    api.put(task.id, toggleTask).then(resp => {
      setTaskList(taskList.map(item => item.id === resp.data.id ? resp.data : item))
    })
  }
  
  return (
    <div>
      <button onClick={showModalForm}>Add new</button>
      <TodoList list={taskList}
      onDeleteTask={onDeleteTask}
      onEditTask={onEditTask}
      onToggle={onToggle}
      />
      <ModalForm 
      task={newTask} 
      modalActive={modalActive} 
      onCancelModal={showModalForm} 
      onChange={onChange} 
      onSaveTask={onSaveTask}
      />
    </div>
  )
}

export default App
