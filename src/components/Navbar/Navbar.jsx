import { NavLink } from "react-router-dom";

const Navbar = () => {
const startNavItems = [
    {
        item: 'Solutions',
        to: '/solutions',   
        dropdown: '>'
    },
    {
        item: 'Features',
        to: '/features',   
        dropdown: '>'
    },
    {
        item: 'Blogs',
        to: '/blogs',   
        dropdown: ''
    },
    {
        item: 'About',
        to: '/About',   
        dropdown: '>'
    },
]
const endNavItems = [
    {
        item: 'Login',
        to: '/login'
},
    {
        item: 'Register',
        to: '/register'
},
]

    return (
        <div className="navbar px-6 h-20 rounded-lg mt-4 bg-transparent max-w-screen-xl mx-auto">
      <div className="navbar-start gap-12 font-bold">
        
        <NavLink to={"/"}>
          <h2 className="">CA Partners</h2>
        </NavLink>
        {
            startNavItems.map(({item,to,dropdown})=> <NavLink key={to} to={to}>{item} {dropdown}</NavLink>)
        }
      </div>
      
      <div className="navbar-end ">
        <ul className={`menu menu-horizontal space-x-6 hidden lg:flex items-center font-bold`}>
          {
          endNavItems.map(({item,to})=><NavLink key={to} to={to}>{item}</NavLink>)
          }
        </ul>

        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 text-sky-500 rounded-box w-52 items-center gap-2 z-10"
          >
            {
            startNavItems.map(({item,to,dropdown})=> <NavLink key={to} to={to}>{item} {dropdown}</NavLink>)
        }
            {
          endNavItems.map(({item,to})=><NavLink key={to} to={to}>{item}</NavLink>)
          }
          </ul>
        </div>
      </div>
    </div>
    );
};

export default Navbar;