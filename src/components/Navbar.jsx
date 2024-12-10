import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className='navbar'>
            <ul className='nav-menu'>
                <li>
                    <NavLink to='/'>HOME PAGE</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>ABOUT US</NavLink>
                </li>
                <li>
                    <NavLink to='/main'>POSTS</NavLink>
                </li>
            </ul>
        </nav>
    )
}