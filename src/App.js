import { Routes, Route } from "react-router-dom";
import UserProfile from "./Pages/UserProfile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserProfile />}></Route>
        <Route path="/user" element={<UserProfile />}></Route>
        <Route path="*" element={<h1>404 Route not found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
