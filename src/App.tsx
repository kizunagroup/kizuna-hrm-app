// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Kizuna HRM Home</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/admin/*" element={<div>Admin Dashboard</div>} />
        <Route path="/dashboard/*" element={<div>User Dashboard</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
