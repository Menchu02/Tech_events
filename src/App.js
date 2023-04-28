import "./App.css";
import Navbar from "./components/NavBar/NavBar";

import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import EventDetail from "./pages/EventDetail/EventDetail";

import MainPage from "./pages/MainPage/MainPage";
import Admin from "./components/Admin/Admin";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Error404 from "./pages/404Page/Error404";



function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<EventDetail />} path="/events/:id" />
          <Route element={<MainPage />} path="/" />

          <Route
            path="/admin"
            element={
              <RequireAuth>
                <Admin />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
