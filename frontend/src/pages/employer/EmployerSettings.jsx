
import { useState } from "react";
import { FaUserCircle, FaCamera } from "react-icons/fa";

const EmployerSettings = () => {

    const [preview, setPreview] = useState("");
    const [avatar, setAvatar] = useState("");

    //handle preview of images
    const handleAvatar = (e) => {
        const file = e.target.files[0]; //select the first image the user picks
        if (!file) return; //not selecting any image
        setAvatar(file);
        setPreview(URL.createObjectURL(file));
    }

    return (
        <div className="p-3">

            <div className="mb-4">
                <h3 className="fw-bold mb-1">Account Settings</h3>
                <p className="text-muted mb-0">
                    Manage your account details and preferences.
                </p>
            </div>

            {/* Profile Picture */}
            <div className="card shadow-sm border-0 p-4 mb-4">

                <h5 className="fw-semibold mb-3">Profile Picture</h5>

                <div className="d-flex align-items-center gap-4 flex-wrap">

                    {/* Profile Image Section */}
                    <div className="d-flex flex-column align-items-center">

                        <div
                            className="border rounded-circle d-flex align-items-center justify-content-center overflow-hidden shadow-sm"
                            style={{
                                width: "120px",
                                height: "120px",
                                background: "#f8f9fa"
                            }}
                        >
                            <label
                                htmlFor="profileFile"
                                className="w-100 h-100 d-flex align-items-center justify-content-center"
                                style={{ cursor: "pointer" }}
                            >

                                {
                                    preview ? (
                                        <img 
                                            src={preview}
                                            className="w-100 h-100"
                                            style={{objectFit: "cover"}}
                                        />
                                    ) : (
                                        <FaUserCircle
                                            size={100}
                                            className="text-secondary"
                                        />
                                    )
                                }


                            </label>
                        </div>

                        <input
                            type="file"
                            id="profileFile"
                            className="d-none"
                            accept="image/*"
                            onChange={handleAvatar}
                        />

                        <button
                            type="button"
                            className="btn btn-primary btn-sm mt-3"
                        >
                            <FaCamera className="me-2" />
                            Change Picture
                        </button>

                    </div>

                    {/* Profile Information */}
                    <div className="flex-grow-1">

                        <div className="p-3 rounded-3 bg-light border">

                            <h5 className="mb-1 fw-bold">
                                Profile Picture
                            </h5>

                            <p className="text-muted small mb-2">
                                Upload a profile picture to help employers
                                recognize you.
                            </p>

                            <small className="text-muted">
                                Click on the picture to select a new image.
                            </small>

                        </div>

                    </div>

                </div>

            </div>

            {/* Personal Information */}
            <div className="border rounded-3 p-4 mb-4">

                <h5 className="fw-semibold mb-3">
                    Personal Information
                </h5>

                <form>
                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Location</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. Nairobi, Kenya"
                            />
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="btn text-white"
                        style={{ backgroundColor: "#3368A0" }}
                    >
                        Save Changes
                    </button>
                </form>

            </div>

            {/* Change Password */}
            <div className="border rounded-3 p-4 mb-4">

                <h5 className="fw-semibold mb-3">
                    Change Password
                </h5>

                <form>

                    <div className="mb-3">
                        <label className="form-label">Current Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter current password"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">New Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter new password"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Confirm New Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm new password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn text-white"
                        style={{ backgroundColor: "#3368A0" }}
                    >
                        Update Password
                    </button>

                </form>

            </div>

        </div>
    );
};

export default EmployerSettings;
