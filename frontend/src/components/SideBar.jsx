
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const SideBar = ({ links, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating toggle on mobile */}
            <button
                type="button"
                className="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`sidebar ${isOpen ? "sidebar-open" : ""}`}
            >
                <h4 className="text-light mb-4">{title}</h4>

                <div className="d-flex flex-column gap-2">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="text-decoration-none rounded-2 px-3 py-3 d-flex align-items-center justify-content-between"
                            style={({ isActive }) => ({
                                color: isActive ? "#133458" : "#fff",
                                backgroundColor: isActive
                                    ? "#E8E085"
                                    : "transparent"
                            })}
                        >
                            <span>{link.name}</span>
                            {link.icon && <span>{link.icon}</span>}
                        </NavLink>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default SideBar;
