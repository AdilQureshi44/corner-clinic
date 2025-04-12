import './App.css';
import Sidebar from "./Layout/Sidebar/Sidebar";
import Header from "./Layout/Header/Header";
import {useState} from "react";

function App() {
    const [isSidebarCollapsed, setIsSidebarOpen] = useState(false);
    return <>

        <div className="app-container">
            <div className="sidebar-container">
                <Sidebar isSidebarCollapsed={isSidebarCollapsed} />
            </div>
            <div className="main-container">
                <Header isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={() => setIsSidebarOpen(prev => !prev)} />

            </div>
        </div>
    </>;
}

export default App;
