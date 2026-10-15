import { MdCode, MdSchool } from "react-icons/md";


const Skills = () => {
    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">My Skills & Projects</h3>
                <p className="text-muted mb-0">
                    Showcase your skills and completed projects to potential employers.
                </p>
            </div>

            <div className="border rounded-3 p-3 mb-4">
                <h5 className="fw-semibold mb-3">
                    <MdSchool size={22} className="me-2" />
                    Add New Skill
                </h5>

                <form>
                    <div className="mb-3">
                        <label className="form-label">Skill Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. React, PHP, UI Design"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn text-white"
                        style={{ backgroundColor: "#3368A0" }}
                    >
                        Add Skill
                    </button>
                </form>
            </div>

            <div className="border rounded-3 p-3 mb-4">
                <h5 className="fw-semibold mb-3">
                    <MdCode size={22} className="me-2" />
                    Add New Project
                </h5>

                <form>
                    <div className="mb-3">
                        <label className="form-label">Project Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. Job Application System"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Project Description</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Describe your project..."
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Technologies Used</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. React, Node.js, MongoDB"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Project Link (Optional)</label>
                        <input
                            type="url"
                            className="form-control"
                            placeholder="https://github.com/username/project"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn text-white"
                        style={{ backgroundColor: "#3368A0" }}
                    >
                        Add Project
                    </button>
                </form>
            </div>

            <div className="mb-4">
                <h5 className="fw-semibold mb-3">My Skills</h5>

                <div className="border rounded-3 p-3">
                    <p className="text-muted mb-0">
                        Your acquired skills will appear here.
                    </p>
                </div>
            </div>

            <div>
                <h5 className="fw-semibold mb-3">My Projects</h5>

                <div className="border rounded-3 p-3">
                    <p className="text-muted mb-0">
                        Your completed projects will appear here.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skills;