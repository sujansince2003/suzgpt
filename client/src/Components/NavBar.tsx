import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center gap-2 p-4 border-b border-b-gray-300">
      <Link to={"/"}>
        <h2>suzgpt</h2>
      </Link>
      <div>user</div>
    </div>
  );
};

export default NavBar;
