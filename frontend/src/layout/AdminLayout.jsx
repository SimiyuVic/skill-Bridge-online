
import DashboardNavBar from "../components/DashboardNavBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { FaUsers } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const AdminLayout = () => {
    const adminLinks = [
        { name: "Dashboard", path: "/admin", icon: <AiOutlineDashboard /> },
        { name: "Employers", path: "/admin/employers", icon: <GrUserManager /> },
        { name: "Job Seekers", path: "/admin/job-seekers", icon: <FaUsers /> },
        { name: "Jobs", path: "/admin/jobs", icon: <MdWork /> },
        { name: "Settings", path: "/admin/settings", icon: <FaCog /> }
    ];

    return (
        <div className="layout">
            <SideBar links={adminLinks} title="Admin Dashboard" />

            <main className="content">
                <div
                    className="card p-3 border-0 shadow-sm text-white"
                    style={{ backgroundColor: "#66A3BF" }}
                >
                    <DashboardNavBar />
                </div>

                <div className="mt-3">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
