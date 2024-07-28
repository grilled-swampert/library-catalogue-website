import { Link } from "react-router-dom";
import Image from "../home/images/black-book.png"
import Search from "../home/images/magnifying-glass.png"
import Menu from "../home/images/hamburger-menu.png"
import Logout from "../home/images/exit-door.png"

export default function Home() {
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
                <div className="content">

                </div>
            </div>
        </div>
    );
};