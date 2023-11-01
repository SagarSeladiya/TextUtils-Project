import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode enabled", "success");
    }
  };
  return (
    <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        about="About Utils"
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text Below" mode={mode} />
        } />
        
      </Routes>
    </Router>
  );
}

export default App;
