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
    const [activeIndex, setActiveIndex] = useState(null);
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
                    <div>{item.icon}</div>
                    {item.name}
                </div>))}
            </div>
        </div>
    </>
}
export default Sidebar;