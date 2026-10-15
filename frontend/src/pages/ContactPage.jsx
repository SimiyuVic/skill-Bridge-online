import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const redirect = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const messageContent = { name, email, phone, message }
        
        fetch("http://localhost:4000/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(messageContent)
        })
        .then((response)=>{
            if(!response.ok)
            {
               throw Error("Cannot send the message"); 
            }
        })
        .then(()=>{
            redirect("/");
            toast.success("Message send succesfully");
        })
        .catch((err)=>{
            toast.error(err.message);
        })
        .finally(
            setName(""),
            setEmail(""),
            setPhone(""),
            setMessage("")
        )
    }

    return (
        <div className="my-3 container">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="card p-4 border-0 shadow-sm">
                        <h5>
                            Call Us
                        </h5>
                        <p>
                            +254702999999
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card p-4 border-0 shadow-sm">
                        <h5>
                            Email Us
                        </h5>
                        <p>
                            info@skillbridge.org
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card p-4 border-0 shadow-sm">
                        <h5>
                            Call Us
                        </h5>
                        <p>
                            +254702999999
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <h5 className="text-center text-muted">
                    Leave us a message and we will respond to it
                </h5>
                <div className="col-md-7">
                    <div className="card p-4 shadow-sm border-0">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor=""> Your Name </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g Jame Brunt"
                                    className="form-control"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Your Email</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g james@gmail.com"
                                    className="form-control"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Your Phone</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g +25472101010"
                                    className="form-control"
                                    value={phone}
                                    onChange={(e)=>setPhone(e.target.value)}
                                />
                            </div>
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    required
                                    placeholder="Leave a message here"
                                    style={{
                                        height: "100px"
                                    }}
                                    value={message}
                                    onChange={(e)=>setMessage(e.target.value)}
                                />
                                <label htmlFor="floatingTextarea">Messages</label>
                            </div>
                            <button className="my-3 btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;