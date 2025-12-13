import { useState } from "react";
import './css/Editor.css'

function Editor({ onToDoAdd }) {

  const [ text, setText ] = useState ("");  
  const [ date, setDate ] = useState ("");
  const [ isOpen, setIsOpen ] = useState (false);

    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
             handleSubmit();
             console.log('enter 입력');
    }
  };

    const handleSubmit = () => {
        if (!text.trim()) return;

        onToDoAdd({
            text: text.trim(),
            date: date.trim() ? date : "",
        }); // App.jsx의 handleToDoAdd 호출

        setText("");
        setDate("");
        setIsOpen(false);
    }  

    if(!isOpen){
    return (
        <div className="Editor">
        <button
        className="Editor-button"
        onClick={() => setIsOpen (true)}
        >
            새 할일 추가
        </button>
        </div>
    )
    }

    return (
     <div className="Editor">
        <h4 className="text-xl font-bold text-gray-800">새 할일 작성😊</h4>
        <div className="editor-wrapper">
        <input className="Editor-input" autoFocus
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="할일을 입력하세요"
        onKeyDown={handleKeyDown}
        />
        
        </div>
        <input className="Editor-date"
        type="datetime-local"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
        onKeyDown={handleKeyDown}
        />
        <button
        className="Editor-button"
        onClick={handleSubmit}
        
        >
            저장
        </button>           
        <button
        className="Editor"
        onClick={() => {
            setIsOpen(false)
            setText("")
            setDate("")
        }}>
            취소    
        </button>   
     </div>
    )   
}

export default Editor