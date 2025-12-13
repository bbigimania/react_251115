import "./css/Header.css";

function Header() {
  return (
    <div className="Header text-xl">
   
      <h1>To-Do List</h1>
      <h1>오늘은 {new Date().toLocaleDateString('ko-KR')}</h1>
   
    </div>
  );
}

export default Header;