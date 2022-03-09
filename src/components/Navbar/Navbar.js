import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className='navbar'>
     <Link style={{textDecoration: 'none'}} to="/">
         <h2 className="logo"
> DAOfind.com <i className="fa fa-grav"></i></h2></Link>
      <SearchBar />
      <button className='connect-wallet'>Connect Wallet</button>
        </nav>
    )
}

export default Navbar;