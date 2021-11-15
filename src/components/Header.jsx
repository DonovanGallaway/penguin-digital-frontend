import {Link} from 'react-router-dom'

const Header = (props) => {
    return <div className="header">
        <h2>Penguin Digital Applications</h2>
        <nav className='nav'>
            <Link to='/'><h3>Home</h3></Link>
            <Link to='/about'><h3>About</h3></Link>
            <Link to='/projects'><h3>Projects</h3></Link>
            <Link to='/contact'><h3>Contact Us</h3></Link>
        </nav>
    </div>
}

export default Header