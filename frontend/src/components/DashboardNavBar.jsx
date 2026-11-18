import { useEffect } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth.js";
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom";





const DashboardNavBar = () => {

    const backendLink = useSelector((state)=>state.prod.link);
    const user = useSelector((state)=>state.auth.user);
    //console.log(user);
    const dispatch = useDispatch();
    const redirect = useNavigate();

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
        

        //fetch user details only if state is empty
        if(!user){
            getDetails();   
        }
    }, [backendLink, dispatch, user]);

    //logout the user
    const logoutUser = async()=>{
        try {
            const response = await axios.post(`${backendLink}/api/v1/auth/logout`, {}, {
                withCredentials: true
            });

            dispatch(authActions.logout()); //clear the states
            redirect("/");
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

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
                    onClick={logoutUser}
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