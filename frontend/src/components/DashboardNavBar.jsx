import { useEffect } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth.js";
import toast from "react-hot-toast"
import { Link } from "react-router-dom";




const DashboardNavBar = () => {

    const backendLink = useSelector((state)=>state.prod.link);
    const user = useSelector((state)=>state.auth.user);
    //console.log(user);
    const dispatch = useDispatch();

    useEffect(()=>{
        const getDetails = async()=>{
            try 
            {
                const response = await axios.get(`${backendLink}/api/v1/auth/user-details`, {
                    withCredentials: true
                });

                //console.log(response.data.user);
                dispatch(authActions.login(response?.data?.user));
            } 
            catch (error) {
               toast.error(error.response?.data?.message); 
            }
        }
        getDetails();   
    }, []);

    return ( 
        <div>
            <nav className="d-flex justify-content-between">
                <div className="text-light">
                    <h5>
                       Welcome { user?.fullname }  {/* we will replace this with username */}
                    </h5>
                    <p>
                        Your email: { user?.email }
                    </p>
                    <p>Your Phone : {user?.phone  }</p>
                    <Link 
                        className="btn btn-primary"
                        to="/"
                    >
                        Home
                    </Link>
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