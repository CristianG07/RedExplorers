import { Link, NavLink } from "react-router-dom"
import { logo } from "../../assets/images"

export default function Navbar() {
   const navItems = [{ name: 'Home', path: '/' }, { name: 'About us', path: '/about' }, { name: 'Destination', path: '/destination' }, { name: 'Tips', path: '/tips' }, { name: 'Contact', path: '/contact' }]

   return (
      <header className="absolute w-full h-24 flex justify-center items-center">
         <nav className="w-[90%] flex justify-between items-center">

            <Link to="/">
               <img src={logo} alt="Red Explorer logo" />
            </Link>

            <ul className="flex gap-20 font-semibold last:mr-20">
               {navItems.map((item) => (
                  <li className="text-secondary text-nowrap" key={item.name}>
                     <NavLink to={item.path}
                        className={({ isActive }) => isActive ? 'active_link' : ''}>
                        {item.name}
                     </NavLink>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   )
}