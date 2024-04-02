import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./authProvider/AuthProvider";

const NavBar = () => {

  const {user,logOUt}=useContext(AuthContext);


  const handleLogout=()=>{
    logOUt()
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err.message)
    })
  }

  console.log(user);
  return (
    <header className="p-4 bg-[#171717] text-white dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex items-center justify-center">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage "
            className="flex items-center text-4xl  text-black p-2"
          >
            A
          </a>
          <ul className="items-stretch hidden space-x-8 lg:flex ml-[200px]">
            <li className="flex">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="flex">
              <Link to={`/signin`}>Sign In</Link>
            </li>
            <li className="flex">
              <Link to={`/signup`}>Sign Up</Link>
            </li>
            <li className="flex">
              <Link to={`/blog`}>Blog</Link>
            </li>
          </ul>
        </div>
        {user ? <div className="items-center flex-shrink-0 hidden lg:flex ">
          <button onClick={handleLogout} className="px-8 py-3 font-semibold rounded bg-green-400 dark:bg-violet-600 dark:text-gray-50">
            Log Out
          </button>
          <p>{user.email}</p>
        </div>:''}
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
