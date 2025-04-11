import "./Header.css";
import {IconBaselineDensityMedium} from "@tabler/icons-react";
import userImg from "../../assets/images/img.png";

const Header = () => {
    return <div>

        <div className="header-container">
            <div className="hamburger"><IconBaselineDensityMedium size={18} stroke={2}/></div>
            <div className="user-settings">
                <img src={userImg} alt="user settings icon"/>
            </div>
        </div>

    </div>
}

export default Header;