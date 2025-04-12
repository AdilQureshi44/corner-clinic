import "./Sidebar.css";
import { useState } from "react";
import {
    IconDashboard,
    IconFile,
    IconChartBar,
    IconBrandAppstore,
} from "@tabler/icons-react";

const Sidebar = ({ isSidebarCollapsed }) => {
    const listItem = [
        { name: "Dashboard", icon: <IconDashboard /> },
        { name: "Pages", icon: <IconFile /> },
        { name: "Charts", icon: <IconChartBar /> },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
            <div className="logo">
               <div  className="logo-icon"> <IconBrandAppstore size={32}/></div>
                <div className="logo-text">Brand AppStore</div>
            </div>

            <div className={`sidebar-item ${isSidebarCollapsed ? "collapsed" : ""}`}>
                {listItem.map((item, index) => (
                    <div
                        key={index}
                        className={`item-list ${activeIndex === index ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <div className="sidebar-icon">{item.icon}</div>
                        <div
                            className={`sidebar-icon-name ${
                                isSidebarCollapsed ? "collapsed" : ""
                            }`}
                        >
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
