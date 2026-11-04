
import DashboardNavBar from "../components/DashboardNavBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUsers, FaCog } from "react-icons/fa";
import { MdWork, MdPostAdd } from "react-icons/md";

const EmployerLayout = () => {

    const employerLinks = [
        {
            name: "Dashboard",
            path: "/employer",
            icon: <AiOutlineDashboard />
        },
        {
            name: "Post a Job",
            path: "/employer/post-job",
            icon: <MdPostAdd />
        },
        {
            name: "My Jobs",
            path: "/employer/jobs",
            icon: <MdWork />
        },
        {
            name: "Applicants",
            path: "/employer/applicants",
            icon: <FaUsers />
        },
        {
            name: "Settings",
            path: "/employer/settings",
            icon: <FaCog />
        }
    ];

    return (
        <div className="layout">
            <SideBar links={employerLinks} title="Employer Dashboard" />

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

export default EmployerLayout;