import { useState } from "react";
import toast from "react-hot-toast";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaPaperPlane
} from "react-icons/fa";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
            toast.error("Please fill in all the fields");
            return;
        }

        const messages = {
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            message: message.trim()
        };

        setLoading(true);

        fetch("http://localhost:4000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messages)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Unable to send your message. Please try again.");
                }

                return response.json();
            })
            .then(() => {
                toast.success("Message sent successfully!");

                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
            })
            .catch((err) => {
                toast.error(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const contactDetails = [
        {
            icon: <FaMapMarkerAlt />,
            title: "Visit Our Office",
            detail: "Westlands, Mpaka Road",
            description: "We would love to hear from you."
        },
        {
            icon: <FaPhoneAlt />,
            title: "Call Us",
            detail: "+254 799 737 826",
            description: "Speak to our support team."
        },
        {
            icon: <FaEnvelope />,
            title: "Email Us",
            detail: "info@skillbridge.co.ke",
            description: "Send us your questions anytime."
        }
    ];

    return (
        <div style={{ backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
            <div className="container py-5">

                {/* Heading */}
                <div className="text-center mb-5">
                    <span
                        className="badge rounded-pill px-3 py-2 mb-3"
                        style={{
                            backgroundColor: "#e6f0fa",
                            color: "#133458"
                        }}
                    >
                        CONTACT US
                    </span>

                    <h2 className="fw-bold mb-3" style={{ color: "#133458" }}>
                        Let's Start a Conversation
                    </h2>

                    <p className="text-muted mx-auto" style={{ maxWidth: "550px" }}>
                        Have a question about SkillBridge? We are here to help
                        you connect with the right opportunities.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="row g-4 mb-5">
                    {contactDetails.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div
                                className="bg-white rounded-4 p-4 h-100 text-center"
                                style={{
                                    border: "1px solid #e8edf3",
                                    transition: "0.2s"
                                }}
                            >
                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                    style={{
                                        width: "55px",
                                        height: "55px",
                                        backgroundColor: "#e6f0fa",
                                        color: "#133458",
                                        fontSize: "20px"
                                    }}
                                >
                                    {item.icon}
                                </div>

                                <h5 className="fw-bold mb-2">
                                    {item.title}
                                </h5>

                                <p className="text-muted small mb-2">
                                    {item.description}
                                </p>

                                <p
                                    className="fw-semibold mb-0"
                                    style={{ color: "#133458" }}
                                >
                                    {item.detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <div
                            className="bg-white rounded-4 p-4 p-md-5"
                            style={{
                                border: "1px solid #e8edf3",
                                boxShadow: "0 8px 30px rgba(19, 52, 88, 0.05)"
                            }}
                        >
                            <div className="mb-4">
                                <h4 className="fw-bold" style={{ color: "#133458" }}>
                                    Send Us a Message
                                </h4>

                                <p className="text-muted mb-0">
                                    Complete the form below and we will get back to you.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">

                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label fw-semibold">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            id="name"
                                            className="form-control py-2"
                                            placeholder="Enter your full name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label fw-semibold">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control py-2"
                                            placeholder="you@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="phone" className="form-label fw-semibold">
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            id="phone"
                                            className="form-control py-2"
                                            placeholder="+254 7XX XXX XXX"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="message" className="form-label fw-semibold">
                                            Your Message
                                        </label>

                                        <textarea
                                            id="message"
                                            className="form-control"
                                            rows="5"
                                            placeholder="How can we help you?"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-12 mt-4">
                                        <button
                                            type="submit"
                                            className="btn w-100 py-3 fw-semibold text-white"
                                            style={{ backgroundColor: "#133458" }}
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                "Sending Message..."
                                            ) : (
                                                <>
                                                    <FaPaperPlane className="me-2" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;