import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import AppliedJobs from "./pages/appliedJobs/AppliedJobs";
import Settings from "./pages/settings/Settings";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messages from "./pages/messages/Messages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="appliedjobs" element={<AppliedJobs />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="register" element={<Register />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
