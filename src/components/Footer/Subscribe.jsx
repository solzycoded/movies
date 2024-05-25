import { useState } from "react";
import FetchRequest from "../../assets/js/request/fetch";

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const subscriberUser = (e) => {
        e.preventDefault();

        if(email.trim()==""){
            setError("Kindly provide your email address.");
        }
        else {
            setError("");

            const success = () => {
                setResponse("You've successfully subscribed to movies. Thank you!");
            }

            const failure = () => {
                setResponse(email + " already exists! Kindly provide a different email address.");
            }

            const setResponse = (message) => {
                setError(message);
                setEmail("");
            }

            (new FetchRequest("POST", "subscribers", { email })).send(success, failure);
        }
    }

    return (
        <>
            <form onSubmit={subscriberUser}>
                <div className="text-danger text-small fw-bold mb-2 text-center">{error}</div>
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Subscribe to Movies" aria-label="Subscribe to Movies" aria-describedby="subscribe" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <button type="submit" className="btn app-bg-color text-white" id="subscribe">Subscribe</button>
                </div>
            </form>
        </>
    )
}

export default Subscribe;