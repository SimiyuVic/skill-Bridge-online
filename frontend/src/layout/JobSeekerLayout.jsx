import { Outlet } from "react-router-dom";
import DashboardNav from "../components/DashboardNavBar";
import SideBar from "../components/SideBar";
import { MdOutlineDashboard } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { GiPokecog } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";


const JobSeekerLayout = () => {

    const seekerLinks = [
        {
            name: "Dashboard",
            path: "/job-seeker",
            icon: <MdOutlineDashboard />
        },
        {
            name: "Applications",
            path: "/job-seeker/applications",
            icon: <MdLibraryBooks />
        },
        {
            name: "My Skills",
            path: "/job-seeker/skills",
            icon: <SiBookstack />
        },
        {
            name: "Settings",
            path: "/job-seeker/settings",
            icon: <GiPokecog />
        },
        {
            name: "Help",
            path: "/job-seeker/help",
            icon: <FaHandsHelping />
        },
    ];

    return (
        <>
            <div className="d-flex m-3">
                <div
                    className="card p-3 border-0 shadow-sm me-3"
                    style={{
                        backgroundColor: "#086288",
                        width: "300px",
                        minHeight: "90vh"
                    }}
                >
                    <SideBar links={seekerLinks} title="JobSeeker Dashboard" />
                </div>
                <div className="flex-grow-1">
                    <div
                        className="card p-3 border-0 shadow-sm"
                        style={{
                            backgroundColor: "#97D7FF"
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

export default JobSeekerLayout;