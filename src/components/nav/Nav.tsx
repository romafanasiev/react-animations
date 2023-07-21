import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className="flex items-center h-[80px] p-2 w-screen bg-black text-white z-50 relative">
      <ul className="flex gap-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

