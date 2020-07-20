import React from "react";
import "./App.css";
import WidgetBridge from "./components/widget-bridge/WidgetBridge.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <WidgetBridge/>
    </Router>
  );
}

export default App;
