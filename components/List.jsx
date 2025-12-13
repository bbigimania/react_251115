import { useState } from "react";
import Item from "./Item.jsx";
import './css/List.css'




function List( { todos, onToDoDelete, onToDoToggle, onToDoEdit } ) {
    
    const [search, setSearch] = useState('');
    const onChanheSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const getSearchedToDos = () => {
      if (search.trim() === '') {
        return todos;
      } else {
        return todos.filter((todo) => 
          todo.text.toLowerCase().includes(search.toLowerCase()) && todo.completed === false
        );
      }         
    }

    const searchedToDos = getSearchedToDos();

          
    return (
        <div className="List space-y-4">
      <input className="searchbar"
        value={search}
        onChange={onChanheSearch}
        placeholder="할일 검색..."
      />  
        <div className="todolist_wrapper">
        {searchedToDos.length === 0 ? (
            <div className="text-lg">검색결과가 없습니다.</div>
        ) : (
            searchedToDos.map((todo) => (
                <Item 
                    key={todo.id}
                    todo={todo}
                    date={todo.date}
                    completed={todo.completed}
                    onToDoDelete={onToDoDelete} 
                    onToDoToggle={onToDoToggle} 
                    onToDoEdit={onToDoEdit}
                />
            ))
        )}
         </div>
        </div>
    )
}

export default List