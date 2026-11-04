import { Outlet } from "react-router-dom";
import DashboardNavBar from "../components/DashboardNavBar";
import SideBar from "../components/SideBar";
import { MdDashboardCustomize } from "react-icons/md";
import { BsJournalPlus } from "react-icons/bs";
import { SiHyperskill } from "react-icons/si";
import { GiCog } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";






const JobSeekerlayout = () => {

    const seekerLinks = [
        {
            name: "Dashboard",
            path: "/job-seeker",
            icon: <MdDashboardCustomize />
        },
        {
            name: "Applications",
            path: "/job-seeker/applications",
            icon: <BsJournalPlus />
        },
        {
            name: "Skills Page",
            path: "/job-seeker/skills",
            icon: <SiHyperskill />
        },
        {
            name: "Settings",
            path: "/job-seeker/settings",
            icon: <GiCog />
        },
        {
            name: "Help",
            path: "/job-seeker/help",
            icon: <FaHandsHelping />
        }
    ];


    return (
        <div className="layout">
            <SideBar links={seekerLinks} title="JobSeeker Dashboard" />

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
}

export default JobSeekerlayout;