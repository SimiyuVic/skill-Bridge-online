import DashboardNav from "../components/DashboardNavBar";
import SideBar from "../components/SideBar";
import { AiFillDashboard } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { MdCreateNewFolder } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { IoMdCog } from "react-icons/io";
import { Outlet } from "react-router-dom";


const EmployerLayout = () => {

    const employerLinks = [
        {
            name: "Dashboard",
            path: "/employer",
            icon: <AiFillDashboard />
        },
        {
            name: "Applicants",
            path: "/employer/applicants",
            icon: <FaUsers />
        },
        {
            name: "Create Jobs",
            path: "/employer/create-job",
            icon: <MdCreateNewFolder />
        },
        {
            name: "Posted Jobs",
            path: "/employer/jobs",
            icon: <FaList />
        },
        {
            name: "Settings",
            path: "/employer/settings",
            icon: <IoMdCog />
        },
    ];

    return ( 
        <div>
            <div className="d-flex m-3">
                <div
                    className="card p-3 border-0 shadow-sm text-light me-3"
                    style={{
                        backgroundColor: "#086288",
                        width: "300px",
                        minHeight: "90vh"
                    }}
                >
                    <SideBar links={ employerLinks } title="Employer Dashboard" />
                </div>

                <div className="flex-grow-1">
                    <div
                        className="card p-3"
                        style={{
                            backgroundColor: "#4D8DBA",
                        }}
                    >
                        <DashboardNav />
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EmployerLayout;