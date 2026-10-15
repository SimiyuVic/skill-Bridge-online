
const AdminSettings = () => {
    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Settings</h3>
                <p className="text-muted mb-0">
                    Manage your administrator account and preferences.
                </p>
            </div>

            <div className="border rounded-3 p-3 mb-3">
                <h6 className="fw-semibold mb-1">Account Settings</h6>
                <p className="text-muted small mb-3">
                    Update your administrator account information.
                </p>

                <button className="btn btn-outline-secondary btn-sm">
                    Edit Profile
                </button>
            </div>

            <div className="border rounded-3 p-3 mb-3">
                <h6 className="fw-semibold mb-1">Security</h6>
                <p className="text-muted small mb-3">
                    Keep your account secure by updating your password.
                </p>

                <button className="btn btn-outline-secondary btn-sm">
                    Change Password
                </button>
            </div>

            <div className="border rounded-3 p-3">
                <h6 className="fw-semibold mb-1">Platform Preferences</h6>
                <p className="text-muted small mb-0">
                    Additional dashboard and platform settings will be available here.
                </p>
            </div>
        </div>
    );
}

export default AdminSettings;