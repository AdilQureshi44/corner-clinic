import './App.css';
import Sidebar from "./Layout/Sidebar/Sidebar";
import Header from "./Layout/Header/Header";

function App() {
    return <>

        <div className="app-container">
            <div className="sidebar-container">
                <Sidebar/>
            </div>
            <div className="main-container">
                <Header/>
            </div>
        </div>
    </>;
}

export default App;
