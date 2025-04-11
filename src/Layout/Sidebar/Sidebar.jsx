import "./Sidebar.css"
import {useState} from "react";
import {
    IconDashboard, IconFile, IconChartBar,
} from "@tabler/icons-react";

const Sidebar = () => {
    const listItem = [
        {name: "Dashboard", icon: <IconDashboard/>},
        {name: "Pages", icon: <IconFile/>}, {
        name: "Charts", icon: <IconChartBar/>},
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    return <>
        <div className="sidebar">
            <div className="logo">
                Modernize
            </div>
            <div className="sidebar-item">
                {listItem.map((item, index) => (<div
                    key={index}
                    className={`item-list ${activeIndex === index ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}>
                    <div className="sidebar-icon">{item.icon}</div>
                   <div className="sidebar-icon-name">{item.name}</div>
                </div>))}
            </div>
        </div>
    </>
}
export default Sidebar;