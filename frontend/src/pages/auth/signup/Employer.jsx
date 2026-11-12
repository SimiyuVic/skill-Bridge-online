import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


const EmployerSignup = () => {

    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");

    const redirect = useNavigate();

    const registerEmployer = async (e) => {
        e.preventDefault();
        try {
            const employerData = { fullname, email, phone, location, password };

            const response = await axios.post("http://localhost:5001/api/v1/employer/register", employerData, {
                withCredentials: true
            });

            redirect("/login");
            toast.success(response.data.message);
        }
        catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">

                    <div className="card border-0 shadow-sm overflow-hidden">
                        <div className="row g-0">

                            {/* Left Side */}
                            <div className="col-md-5 bg-primary text-white d-flex align-items-center">
                                <div className="p-4 p-lg-5">
                                    <h2 className="fw-bold mb-3">
                                        Hire With SkillBridge
                                    </h2>

                                    <p className="mb-3">
                                        Create your employer account and
                                        connect with talented candidates
                                        looking for their next opportunity.
                                    </p>

                                    <p className="mb-0">
                                        Post jobs, discover candidate profiles,
                                        and find the right talent for your
                                        organization.
                                    </p>
                                </div>
                            </div>

                            {/* Registration Form */}
                            <div className="col-md-7 p-4 p-lg-5">

                                <div className="mb-4">
                                    <h3 className="fw-bold">
                                        Employer Registration
                                    </h3>

                                    <p className="text-muted mb-0">
                                        Create your company account to get started.
                                    </p>
                                </div>

                                <form onSubmit={registerEmployer}>

                                    {/* Company Name */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="companyName"
                                            className="form-label"
                                        >
                                            Company Name
                                        </label>

                                        <input
                                            type="text"
                                            id="companyName"
                                            placeholder="e.g. Travel Companies Ltd"
                                            className="form-control"
                                            value={fullname}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>

                                    {/* Company Email */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="companyEmail"
                                            className="form-label"
                                        >
                                            Company Email
                                        </label>

                                        <input
                                            type="email"
                                            id="companyEmail"
                                            placeholder="e.g. info@travelcompanies.co.ke"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
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
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>

                                    {/* Location */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="location"
                                            className="form-label"
                                        >
                                            Company Location
                                        </label>

                                        <input
                                            type="text"
                                            id="location"
                                            placeholder="e.g. Waiyaki Way, Nairobi"
                                            className="form-control"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
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
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                    >
                                        Create Employer Account
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

export default EmployerSignup;