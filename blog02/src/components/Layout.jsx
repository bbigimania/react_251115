import { Link, Outlet } from "react-router-dom";

function Layout( ) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-sky-800 shadow text-white">
        <nav className="max-w-4xl mx-auto p-4 flex gap-4 items-center">
          <Link to="/" className="font-bold">My Blog</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/write">Write</Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-4 bg-blue-400 shadow">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;