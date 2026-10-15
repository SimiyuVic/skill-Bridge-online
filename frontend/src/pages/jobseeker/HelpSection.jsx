const JobSeekerHelp = () => {
    return (
        <div className="p-3">
            <h3 className="fw-bold mb-1">Help & Support</h3>
            <p className="text-muted mb-4">
                Get help with using your SkillBridge account.
            </p>

            <div className="border rounded-3 p-3 mb-3">
                <h5>Frequently Asked Questions</h5>
                <p className="mb-2">How do I apply for a job?</p>
                <p className="text-muted">Visit the All Jobs page and select a job to apply.</p>
                <hr />
                <p className="mb-2">How do I track my applications?</p>
                <p className="text-muted mb-0">
                    Visit the My Applications section in your dashboard.
                </p>
            </div>

            <div className="border rounded-3 p-3">
                <h5>Need More Help?</h5>
                <p className="text-muted">Contact us if you experience any issues.</p>
                <a href="/contact" className="btn text-white" style={{ backgroundColor: "#3368A0" }}>
                    Contact Support
                </a>
            </div>
        </div>
    );
}

export default JobSeekerHelp;