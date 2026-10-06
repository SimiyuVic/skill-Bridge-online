import { Link } from "react-router-dom";

const EmployerRegister = () => {
    return (
        <div>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-sm border-0">
                            <div className="row">
                                <div className="col-md-6 bg-primary text-light">
                                    <h2 className="my-2 p-4">
                                        Welcome to skillBridge
                                    </h2>
                                    <p className="my-2 p-4">
                                        Are you a company looking for top talent. <br />
                                        Register with skillBridge today, to have access to the best
                                        talent arround.
                                    </p>

                                </div>
                                <div className="col-md-6 p-4">
                                    <form >
                                        <div className="mb-3">
                                            <label htmlFor="name" className=" py-2">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g Marvel Productions"
                                                className="form-control my-2 p-2"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name" className=" py-2">
                                                Company Email
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g marvel@mail.com"
                                                className="form-control my-2 p-2"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name" className=" py-2">
                                                Company Phone
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g +254709090909"
                                                className="form-control my-2 p-2"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name" className=" py-2">
                                                Company Location
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g Waiyaki Way"
                                                className="form-control my-2 p-2"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="name" className=" py-2">
                                                Your Password
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your password"
                                                className="form-control my-2 p-2"
                                            />
                                        </div>
                                        <button className="btn btn-primary w-100">
                                            Register Now
                                        </button>
                                        <h6 className="my-2">
                                            Already have an account?
                                            <Link
                                                className="ms-2"
                                                style={{ textDecoration: "none" }}
                                                to="/login"
                                            >
                                                Login
                                            </Link>
                                        </h6>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployerRegister;