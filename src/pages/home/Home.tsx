import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="bg-red-500 h-screen">
      <h1>Home</h1>
      <Link to="about">About</Link>
    </div>
  );
};

