import { Link } from "react-router-dom";
import Image from "../pages/home/images/black-book.png"
import Search from "../pages/home/images/magnifying-glass.png"
import Menu from "../pages/home/images/hamburger-menu.png"
import Logout from "../pages/home/images/exit-door.png"

const HomeHeader = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="navigation">
                    <Link to="/home" className="inactive">
                        <img src={Image} id="homeIcon" alt="Home Icon" />
                    </Link>
                    <h2>VISIT</h2>
                    <h2>RECORDS</h2>
                    <h2>CATALOGUE</h2>
                    <h2>ABOUT US</h2>
                    <h1> </h1>
                    <div className="images">
                        <img src={Search} id="searchIcon" alt="Search Icon" />
                        <img src={Menu} id="menuIcon" alt="Menu Icon" />
                        <img src={Logout} id="logoutIcon" alt="Logout Icon" />
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="content-container">
                    CURRENT EVENT
                </div>
                <div className="saleInfo">
                    <h1>SECOND BOOK SALE</h1>
                    <h3>Second book exhibition sale this year starting the 3rd week of February.</h3>
                </div>
                <button className="saleVisit">Visit the SALE</button>
            </div>
        </div>
    );
}

export default HomeHeader;