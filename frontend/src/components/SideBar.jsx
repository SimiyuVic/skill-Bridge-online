import { NavLink } from "react-router-dom";

const SideBar = ({ title, links }) => {
    return (
        <div>
            <h4 className="text-white">
                {title} 
            </h4>
            <div className="d-flex flex-column gap-2">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `text-decoration-none rounded-2 px-3 py-3 d-flex align-items-center justify-content-between ${isActive ? "active-link" : "link"
                            }`
                        }
                        style={({ isActive }) => ({
                            color: "#fff",
                            backgroundColor: isActive
                                ? "#E8E085"
                                : "transparent",
                            transition: "0.2s ease"
                        })}
                    >
                        {/* Link Name */}
                        <span>
                            {link.name}
                        </span>

                        {/* Link Icon */}
                        {link.icon && (
                            <span aria-hidden="true">
                                {link.icon}
                            </span>
                        )}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default SideBar;