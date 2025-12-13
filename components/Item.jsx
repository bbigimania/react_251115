import React, { useState } from 'react';
import './css/Item.css';

const Item = ({ todo, onToDoDelete, onToDoEdit, onToDoToggle }) => {

const [ isEditing, setIsEditing ] = useState (false);
const [ editText, setEditText ] = useState (todo.text);
const [ editDate, setDate ] = useState ("");
const isDate = (todo.date)


   const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
             handleSave();
             console.log('enter 입력');
    }
  };


// 저장 버틈 클릭
const handleSave = () => {
    if (editText.trim()) {
        if (typeof onToDoEdit === 'function') {
            onToDoEdit (todo.id, editText.trim(), editDate);
        }
        setIsEditing (false);
    }
};
// 취소 버튼 클릭
const handleCancel = () => {
    setEditText (todo.text);
    setIsEditing (false);
};  

return (
    <li className="todo-item bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        {isEditing ? (
            <div className="space-y-3"> 
                <input 
                    type="text"
                    value={editText}    
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    onKeyDown={handleKeyDown}
                />  
                <input
                    type="datetime-local"
                    value={editDate}
                    onChange={(e)=>setDate(e.target.value)}
                    onKeyDown={handleKeyDown}     
                    />
                <div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
                    onClick={handleSave}
                    >저장</button>  
                    <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"           
                    onClick={handleCancel}
                    >취소</button>
                    
                </div>
            </div>
        ) : (
            <div className="flex items-center justify-between">   
                <div>
                    <input 
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToDoToggle(todo.id)}
                        className="mr-2"  
                    />
                    <span className={todo.completed ? "line-through text-gray-500" : ""}>
                        {todo.text}
                    </span>
                    <div className="text-sm text-gray-400 mt-1">
                        {isDate}
                    </div>
                </div>
                <div>
                    <button className="bg-yellow-500 text-white py-2 px-2 rounded-md hover:bg-yellow-600 mr-2"
                    onClick={() => setIsEditing(true)}
                    >수정</button>
                    <button className="bg-red-500 text-white py-2 px-2 rounded-md hover:bg-red-600"
                    onClick={() => onToDoDelete(todo.id)}
                    >삭제</button>
                </div>
            </div>
        )}
    </li>
);
};  

export default Item;