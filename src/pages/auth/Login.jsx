import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-sm border-0">
                            <div className="row">
                                <div className="col-md-6 bg-primary text-light">
                                    <h2 className="my-2 p-4">
                                        Welcome Back
                                    </h2>
                                    <p className="my-2 p-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptatibus enim sit, dignissimos iure ab beatae hic?
                                    </p>

                                </div>
                                <div className="col-md-6 p-4">
                                    <form >
                                        <div className="mb-3">
                                            <label htmlFor="name" className=" py-2">
                                                Your Email
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g vicor@mail.com"
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
                                            Login
                                        </button>
                                        <h6 className="my-2">
                                            Don't have an account?
                                            <Link 
                                            className="ms-2" 
                                            style={{textDecoration: "none"}}
                                            to="/signup"
                                            >
                                                Register Now
                                            </Link>
                                        </h6>
                                        <h6 className="text-center text-danger">
                                            Reset Password
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

export default Login;