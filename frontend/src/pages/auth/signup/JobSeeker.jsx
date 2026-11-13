
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const JobSeeker = () => {

    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const redirect = useNavigate();

    const registerUser = async(e)=>{
        e.preventDefault();
        try
        {
           const userData = { fullname, email, phone, password } ;

           const response = await axios.post("http://localhost:5001/api/v1/jobseeker/register", userData, {
            withCredentials: true
           });

           redirect("/login");
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
                            <div className="col-md-5 bg-primary text-white d-flex align-items-center">
                                <div className="p-4 p-lg-5">
                                    <h2 className="fw-bold mb-3">
                                        Join SkillBridge
                                    </h2>

                                    <p className="mb-3">
                                        Create your Job Seeker account and
                                        discover opportunities that match your
                                        skills and experience.
                                    </p>

                                    <p className="mb-0">
                                        Build your profile, apply for jobs,
                                        and get discovered by employers.
                                    </p>
                                </div>
                            </div>

                            {/* Registration Form */}
                            <div className="col-md-7 p-4 p-lg-5">

                                <div className="mb-4">
                                    <h3 className="fw-bold">
                                        Job Seeker Registration
                                    </h3>

                                    <p className="text-muted mb-0">
                                        Create your account to get started.
                                    </p>
                                </div>

                                <form onSubmit={registerUser}>

                                    {/* Full Name */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="fullName"
                                            className="form-label"
                                        >
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            id="fullName"
                                            placeholder="e.g. James Burton"
                                            className="form-control"
                                            value={fullname}
                                            onChange={(e)=>setFullName(e.target.value)}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
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

                                    {/* Phone */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="phone"
                                            className="form-label"
                                        >
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="e.g. +254709090909"
                                            className="form-control"
                                            value={phone}
                                            onChange={(e)=>setPhone(e.target.value)}
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="mb-4">
                                        <label
                                            htmlFor="password"
                                            className="form-label"
                                        >
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Create a password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                    >
                                        Create Account
                                    </button>

                                    <div className="text-center mt-4">
                                        <span className="text-muted">
                                            Already have an account?
                                        </span>

                                        <Link
                                            to="/login"
                                            className="ms-2 text-decoration-none fw-semibold"
                                        >
                                            Login
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

export default JobSeeker;