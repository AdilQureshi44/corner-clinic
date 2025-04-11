import "./Header.css";
import { IconBaselineDensityMedium } from "@tabler/icons-react";
import userImg from "../../assets/images/img.png";

const Header = ({ isSidebarCollapsed, toggleSidebar }) => {
    return (
        <div className={`header-container ${isSidebarCollapsed ? "full-width" : ""}`}>
            <div className="hamburger" onClick={toggleSidebar}>
                <IconBaselineDensityMedium size={18} stroke={2} />
            </div>
            <div className="user-settings">
                <img src={userImg} alt="user settings icon" />
            </div>
        </div>
    );
};

export default Header;
