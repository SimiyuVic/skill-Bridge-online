import DashboardNav from "../components/DashboardNavBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { FaUsers } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";




const Adminlayout = () => {

    const adminLinks = [
        {
            name: "Dashboard",
            path: "/admin",
            icon: <AiOutlineDashboard />
        },
        {
            name: "Employers",
            path: "/admin/employers",
            icon: <GrUserManager />
        },
        {
            name: "Applicants",
            path: "/admin/job-seeker",
            icon: <FaUsers />
        },
        {
            name: "Jobs",
            path: "/admin/jobs",
            icon: <FaBriefcase />
        },
        {
            name: "Settings",
            path: "/admin/settings",
            icon: <IoSettings />
        },
    ];

    return (
        <>
            <div className="d-flex m-3">
                <div
                    className="card p-3 border-0 shadow-sm text-light"
                    style={{
                        backgroundColor: "#086288",
                        width: "300px",
                        minHeight: "90vh"
                    }}
                >
                    <SideBar links={ adminLinks } title="Admin Dashboard" />
                </div>
                <div className="ms-3 flex-grow-1">
                    <div
                        className="card border-0 shadow-sm p-3 text-white"
                        style={{
                            backgroundColor: "#4D8DBA"
                        }}
                    >
                        <DashboardNav />
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Adminlayout;