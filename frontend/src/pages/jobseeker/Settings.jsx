import { FaUserCircle, FaCamera } from "react-icons/fa";


const JobSeekerSettings = () => {
    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Account Settings</h3>
                <p className="text-muted mb-0">
                    Manage your account details and preferences.
                </p>
            </div>

            {/* Profile Picture */}
            <div className="border rounded-3 p-4 mb-4">
                <h5 className="fw-semibold mb-3">Profile Picture</h5>

                <div className="d-flex align-items-center gap-3">
                    <div
                        className="rounded-circle bg-light border d-flex align-items-center justify-content-center"
                        style={{ width: "100px", height: "100px", overflow: "hidden" }}
                    >
                        <FaUserCircle size={85} className="text-secondary" />
                    </div>

                    <div>
                        <label className="btn btn-outline-primary mb-2">
                            <FaCamera className="me-2" />
                            Upload Picture
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                            />
                        </label>
                        <p className="text-muted small mb-0">
                            Upload a profile picture to help employers recognize you.
                        </p>
                    </div>
                </div>
            </div>

            {/* Personal Information */}
            <div className="border rounded-3 p-4 mb-4">
                <h5 className="fw-semibold mb-3">Personal Information</h5>

                <form>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" placeholder="Enter your full name" />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" placeholder="Enter your email address" />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" placeholder="Enter your phone number" />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Location</label>
                            <input type="text" className="form-control" placeholder="e.g. Nairobi, Kenya" />
                        </div>
                    </div>

                    <button type="submit" className="btn text-white" style={{ backgroundColor: "#3368A0" }}>
                        Save Changes
                    </button>
                </form>
            </div>

            {/* Change Password */}
            <div className="border rounded-3 p-4 mb-4">
                <h5 className="fw-semibold mb-3">Change Password</h5>

                <form>
                    <div className="mb-3">
                        <label className="form-label">Current Password</label>
                        <input type="password" className="form-control" placeholder="Enter current password" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">New Password</label>
                        <input type="password" className="form-control" placeholder="Enter new password" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Confirm New Password</label>
                        <input type="password" className="form-control" placeholder="Confirm new password" />
                    </div>

                    <button type="submit" className="btn text-white" style={{ backgroundColor: "#3368A0" }}>
                        Update Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default JobSeekerSettings;