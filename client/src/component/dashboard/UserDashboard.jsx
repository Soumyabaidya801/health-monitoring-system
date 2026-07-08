import React from "react";
import { Navigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import Sidebar from "./Sidebar";

const UserDashboard = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-slate-100">
          <UserNavbar />
    
          <div className="flex">
            <Sidebar/>
    
            <main className="flex-1 p-6">
              <h1 className="text-3xl font-bold">
                Welcome Back 👋
              </h1>
    
              <p className="text-gray-500 mt-2">
                Monitor your health in real time.
              </p>
            </main>
          </div>
        </div>
  );
};

export default UserDashboard;