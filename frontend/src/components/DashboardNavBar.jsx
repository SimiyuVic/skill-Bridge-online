import { FaArrowRightToBracket } from "react-icons/fa6";



const DashboardNavBar = () => {
    return ( 
        <div>
            <nav className="d-flex justify-content-between">
                <div className="text-light">
                    <h5>
                       Welcome Admin  {/* we will replace this with username */}
                    </h5>
                    <p>
                        One central place to manage all your data.
                    </p>
                </div>
                <div>
                    <button 
                    className="btn"
                    style={{
                        backgroundColor: "#E8E085"
                    }}
                    >
                        Logout <span className="ms-3"> <FaArrowRightToBracket /> </span>
                    </button>
                </div>
            </nav>
        </div>
     );
}
 
export default DashboardNavBar;