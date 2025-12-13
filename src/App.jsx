import { useState } from 'react'
import './App.css'
import Header from '/components/Header.jsx'
import Editor from '/components/Editor.jsx'
import List from '/components/List.jsx'

 


function App() {
  
//todos 배열

const [ todos, setTodos ] = useState ([

  {
    id : 1,
    text : "리액트 공부하기",
    date : new Date().toLocaleString('ko-KR'),
    completed : false,

  },

  {
    id : 2,
    text : "투두리스트 만들기",
    date : new Date().toLocaleString('ko-KR'),
    completed : true,
  },

  {
    id : 3,
    text : "투두리스트 완성하기",
    date : new Date().toLocaleString('ko-KR'),
    completed : false,
  },



]);

//todo 추가
  const handleToDoAdd = ({text, date}) => {
    const formattedDate = date && date.trim() ? new Date(date).toLocaleString('ko-KR') : new Date().toLocaleString('ko-KR');
    const newToDo = {
      id : Date.now(),
      text,
      date : formattedDate,
      completed : false,
    }
    setTodos([newToDo, ...todos]);
  }

  //todo 삭제

  const handleToDoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== Number(id)));
  }

  //todo 수정

  const handleToDoEdit = (id, editText, editDate) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, text: editText, date: editDate ? new Date(editDate).toLocaleString('ko-KR') : todo.date } : todo
    ));
  }

  //todo 완료 토글

  const handleToDoToggle = (id) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }






  return (
    <div className="App">
      <div>
      <Header />
      <h3>총{todos.length} 개의 할일</h3>
    </div>
    <div>
      <Editor onToDoAdd={handleToDoAdd} />
      </div>
      <div>
      <List todos={todos} onToDoDelete={handleToDoDelete} onToDoToggle={handleToDoToggle} onToDoEdit={handleToDoEdit} />
      </div>
    </div>
  );
}

export default App
