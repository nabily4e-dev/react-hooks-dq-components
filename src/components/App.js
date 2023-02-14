import React from "react";
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";
import TopMenu from "./TopMenu";

function App() {
    return <div className="app-container">
        {/* What components go here? */}
        <SideMenu/>
        <TopMenu/>
        <MainContent/>
    </div>;
}

export default App;
