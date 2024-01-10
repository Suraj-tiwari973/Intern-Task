import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardData from "../components/DashboardData";
import "../styles/dashboard.css";
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-2 bg-warning" style={{height:"100vh"}}>
            <Sidebar />
          </div>
          <div className="col-md-10 d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
            <DashboardData/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
