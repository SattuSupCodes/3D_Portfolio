import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="header ">
            <NavLink to="/"  className="w-10 h-10 rounded-lg bg-white 
            items-center  flex font-bold shadow-md text-center justify-center">
                <p className="blue-gradient_text">SH</p>
            </NavLink>
            <nav className="Flex text-lg gap-7 font-medium">

                <NavLink to="/about" className={({ isActive }) => isActive ?
                'text-blue-500' : 'text-black'}>
                    About

                </NavLink>
                
                <NavLink to="/Projects" className={({ isActive }) => isActive ?
                'text-blue-500' : 'text-black'}>
                    Projects

                </NavLink>

            </nav>
        </header>
       
    )
}
export default Navbar 