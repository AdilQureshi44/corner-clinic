import "./Sidebar.css"
import {useState} from "react";
import {
    IconDashboard, IconFile, IconChartBar,
} from "@tabler/icons-react";

const Sidebar = ({isSidebarCollapsed}) => {
    const listItem = [
        {name: "Dashboard", icon: <IconDashboard/>},
        {name: "Pages", icon: <IconFile/>}, {
        name: "Charts", icon: <IconChartBar/>},
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    return <>
        <div className={`${isSidebarCollapsed ? "collapsed" : "sidebar"}`}>
            <div className="logo">
                Modernize
            </div>
            <div className={`${isSidebarCollapsed ? "sidebar-item-two" : "sidebar-item"}`}>
                {listItem.map((item, index) => (<div
                    key={index}
                    className={`item-list ${activeIndex === index ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}>
                    <div className="sidebar-icon">{item.icon}</div>
                   <div className={`${isSidebarCollapsed ? "sidebar-icon-name-two" : "sidebar-icon-name"}`}>{item.name}</div>
                </div>))}
            </div>
        </div>
    </>
}
export default Sidebar;