import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import socket from "./sockets/socket";
import { fetchSharedCode, runCode } from "./services/api";

import LanguageSelector from "./components/LanguageSelector";
import CodeEditor from "./components/CodeEditor";
import ProtectedRoute from './components/ProtectedRoute';
import Compiler from './components/Compiler';
import Navbar from './components/Navbar';

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from './pages/Home';

function App() {
  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState("cpp");
  const [output, setOutput] = useState("");
  const [shareableLink, setShareableLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const id = window.location.pathname.split("/code/")[1];
    if (id) {
      fetchSharedCode(id)
        .then(res => {
          setCode(res.data.code);
          setLanguage(res.data.language);
        })
        .catch(() => alert("Failed to load shared code."));
    }
  }, []);

  const handleCodeChange = (newValue) => {
    setCode(newValue);
    socket.emit("code_change", newValue);
  };

  useEffect(() => {
    socket.on("code_update", setCode);
    return () => socket.off("code_update");
  }, []);

  const handleRun = async () => {
    setOutput("⏳ Running...");
    setShareableLink("");
    try {
      const res = await runCode(code, language);
      setOutput(res.data.output);
      setShareableLink(res.data.shareableLink || "");
    } catch {
      setOutput("❌ Error: Unable to connect to backend.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Logged out!');
    navigate('/login');
  };

  return (
    <div>
      <Navbar handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/compiler"
          element={
            <ProtectedRoute>
              <Compiler
                language={language}
                setLanguage={setLanguage}
                code={code}
                handleCodeChange={handleCodeChange}
                handleRun={handleRun}
                output={output}
                shareableLink={shareableLink}
              >
                <LanguageSelector language={language} setLanguage={setLanguage} />
                <CodeEditor code={code} language={language} handleCodeChange={handleCodeChange} />
              </Compiler>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
