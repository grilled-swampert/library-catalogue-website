import Search from '../pages/home/images/search.svg';
import Menu from '../pages/home/images/menu.svg';
import Logout from '../pages/home/images/logout.svg';

const Header = () => {
    return (
        <div>
            <header>
                <nav className="header__nav">
                    <div className="header__logo">
                        <h4 data-aos="fade-down">Rembrandt</h4>
                        <div className="header__logo-overlay"></div>
                    </div>

                    <ul className="header__menu" data-aos="fade-down">
                        <li>
                            <a href="#visit">Visit</a>
                        </li>
                        <li>
                            <a href="#yourbooks">Your Books</a>
                        </li>
                        <li>
                            <a href="#catalogue">Catalogue</a>
                        </li>
                        <li>
                            <a href="#about-us">About Us</a>
                        </li>
                        <li>
                            <img src={Search} alt="Search" />
                        </li>
                        <li>
                            <img src={Logout} alt="Logout" />
                        </li>
                    </ul>

                    <ul className="header__menu-mobile" data-aos="fade-down">
                        <li>
                            <img src={Menu} alt="Menu" />
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;