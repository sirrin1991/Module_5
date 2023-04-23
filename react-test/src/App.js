import './App.css';
import Welcome from "./components/Welcome";
import React from "react";
import Browser from "./components/Browser";
import StudentTable from "./components/StudentTable";
import Card from "./components/Card";
import Toggle from "./components/Togle";
import IncreDecre from "./components/IncreDecre";
import ChangeBackgroundColor from "./components/ChangeBackgroundColor";
import HiddenItem from "./components/HiddenItem";

function App() {
  return (
    <div>
      {/*<ChangeBackgroundColor/>*/}
        {/*<Welcome name="Công"/>*/}
        {/*<Browser/>*/}
        {/*<StudentTable/>*/}
        {/*<Toggle/>*/}
        {/*/!*<IncreDecre/>*!/*/}
        <HiddenItem/>
    </div>
  );
}

export default App;
