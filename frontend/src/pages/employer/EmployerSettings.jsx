
import { useState } from "react";
import { MdBusiness } from "react-icons/md";
import { FaCamera } from "react-icons/fa";

const EmployerSettings = () => {
    const [logo, setLogo] = useState(null);

    const handleLogoChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setLogo(URL.createObjectURL(file));
        }
    };

    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Company Settings</h3>
                <p className="text-muted mb-0">
                    Manage your company profile and account information.
                </p>
            </div>

            <div className="border rounded-3 p-3 mb-4">
                <h5 className="fw-semibold mb-3">Company Logo</h5>

                <div className="d-flex align-items-center gap-3">
                    <div
                        className="d-flex align-items-center justify-content-center bg-light border rounded-3 overflow-hidden"
                        style={{ width: "90px", height: "90px", flexShrink: 0 }}
                    >
                        {logo ? (
                            <img
                                src={logo}
                                alt="Company logo preview"
                                className="w-100 h-100"
                                style={{ objectFit: "contain" }}
                            />
                        ) : (
                            <MdBusiness size={55} className="text-secondary" />
                        )}
                    </div>

                    <div>
                        <p className="fw-semibold mb-1">Upload Company Logo</p>
                        <p className="text-muted small mb-2">
                            Choose a logo to help candidates identify your company.
                        </p>

                        <label className="btn btn-outline-secondary btn-sm mb-0">
                            <FaCamera className="me-2" />
                            Choose Logo
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={handleLogoChange}
                            />
                        </label>
                    </div>
                </div>
            </div>

            <div className="border rounded-3 p-3 mb-4">
                <h5 className="fw-semibold mb-3">Account Information</h5>

                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your full name"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter your phone number"
                    />
                </div>
            </div>

            <div className="border rounded-3 p-3 mb-4">
                <h5 className="fw-semibold mb-3">Company Information</h5>

                <div className="mb-3">
                    <label className="form-label">Company Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your company name"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Company Website</label>
                    <input
                        type="url"
                        className="form-control"
                        placeholder="https://example.com"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Company Description</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Tell candidates about your company"
                    ></textarea>
                </div>
            </div>

            <button
                type="button"
                className="btn text-white px-4"
                style={{ backgroundColor: "#3368A0" }}
            >
                Save Changes
            </button>
        </div>
    );
};

export default EmployerSettings;