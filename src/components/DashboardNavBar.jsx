import { FaArrowRightToBracket } from "react-icons/fa6";



const DashboardNav = () => {
    return (
        <div className="d-flex justify-content-between">
            <div className="text-light">
                <h5 >
                    Welcome Admin
                </h5> 
                <p>
                    Manage your account from a central place.
                </p>
            </div>
            <div>
                <button
                className="btn"
                style={{
                    backgroundColor: "#D4621A"
                }}
                >
                    <span className="me-3">Logout</span> <FaArrowRightToBracket />
                </button>
            </div>
        </div>
    );
}

export default DashboardNav;