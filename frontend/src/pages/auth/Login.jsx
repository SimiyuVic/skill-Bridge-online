import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const redirect = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = async(e)=>{
        e.preventDefault();

        try
        {
            const userData = { email, password };

            const response = await axios.post("http://localhost:5001/api/v1/auth/login", userData, {
                withCredentials: true
            });
            console.log(response.data.user);

            //redirect to the correct dashboard
            switch(response.data.user)
            {
                case "admin":
                    redirect("/admin");
                    break;
                case "employer":
                    redirect("/employer");
                    break;
                case "jobseeker":
                    redirect("/job-seeker")
                    break;
                default:
                    redirect("/login");
                    break;
            }

            toast.success(response.data.message);
        }
        catch(error)
        {
            toast.error(error.response.data.message)
        }

    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-9 col-lg-8">
                    <div className="card border-0 shadow-sm overflow-hidden">
                        <div className="row g-0">

                            {/* Left Side */}
                            <div className="col-md-6 bg-primary text-white d-flex align-items-center">
                                <div className="p-4 p-lg-5">
                                    <h2 className="fw-bold mb-3">
                                        Welcome Back!
                                    </h2>

                                    <p className="mb-0">
                                        Login to your SkillBridge account and
                                        continue exploring opportunities,
                                        managing jobs, and connecting with
                                        employers.
                                    </p>
                                </div>
                            </div>

                            {/* Login Form */}
                            <div className="col-md-6 p-4 p-lg-5">
                                <div className="text-center mb-4">
                                    <h3 className="fw-bold">Login</h3>
                                    <p className="text-muted mb-0">
                                        Enter your details to continue
                                    </p>
                                </div>

                                <form onSubmit={handleLogin}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="e.g. james@gmail.com"
                                            className="form-control"
                                            value={email}
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Enter your password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}
                                        />
                                    </div>

                                    <div className="text-end mb-3">
                                        <Link
                                            to="/forgot-password"
                                            className="text-decoration-none small"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    {!loading &&
                                        
                                        <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                    >
                                        Login
                                    </button>}
                                    {   
                                        
                                        <button onClick={()=>setLoading(true)}
                                        type="submit"
                                        className="btn btn-warning w-100"
                                    >
                                        Loging In . . .
                                    </button>}

                                    <div className="text-center mt-4">
                                        <span className="text-muted">
                                            Don't have an account?
                                        </span>

                                        <Link
                                            to="/signup"
                                            className="ms-2 text-decoration-none fw-semibold"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;