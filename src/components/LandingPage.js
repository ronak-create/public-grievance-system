import React, { useState } from "react";
import "./css/LandingPage.css"; // Import the CSS file for styling
import logo from "./logo.png";
import Chatbot from "./ChatBot";
import axios from "axios";
import Login from "./Login"; // Import the login component

const GovernmentLoginPage = () => {
  const [showLogin, setShowLogin] = useState(false); // State for showing/hiding login form

  const toggleLogin = () => {
    setShowLogin(!showLogin); // Toggle login popup visibility
  };
  const [showRegister, setShowRegister] = useState(false); // State for showing/hiding login form

  const toggleRegister = () => {
    setShowRegister(!showRegister); // Toggle login popup visibility
  };
  const [formData, setFormData] = useState({
    username: "",
    contact: "",
    pincode: "",
    state: "",
    street: "",
    address: "",
    complaint: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/complain/complain",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      // console.log(response.data);
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <main>
        <div className="login-box">
          <h2>Register a Complain</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-field block">
              <label htmlFor="username">Name</label>
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field block">
              <label htmlFor="pincode">Pincode</label>
              <label htmlFor="state">State</label>
              <label htmlFor="street">Street</label>
              <label htmlFor="address">Address</label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="complaint">Query</label>
              <textarea
                id="complaint"
                name="complaint"
                value={formData.complaint}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          {showLogin && (
            <div className="login-popup">
              <div className="popup-overlay" onClick={toggleLogin}></div>{" "}
              {/* Overlay to close popup */}
              <div className="popup-content">
                <Login />
              </div>
            </div>
          )}
        </div>
      </main>
      <section className="grs-section">
  <div className="container">
    <header className="grs-header text-center">
      <h1 className="title">Grievance Redressal System</h1>
      <p className="subtitle">Empowering Citizens, Enhancing Transparency</p>
    </header>
    
    <div className="content">
      <section className="drawbacks-section">
        <h2>Challenges in Existing Systems</h2>
        <ul>
          <li><strong>Lack of Awareness:</strong> Many people are unaware of GRS or its processes.</li>
          <li><strong>Complex Procedures:</strong> Filing grievances is often tedious and discouraging.</li>
          <li><strong>Bureaucratic Delays:</strong> Prolonged resolutions due to red tape.</li>
          <li><strong>Lack of Transparency:</strong> Processes are unclear, eroding trust.</li>
          <li><strong>Ineffective Follow-up:</strong> No proper follow-ups create a sense of neglect.</li>
          <li><strong>Fear of Retaliation:</strong> Concerns about consequences deter users.</li>
        </ul>
      </section>

      <section className="loopholes-section">
        <h2>Identified Loopholes</h2>
        <ul>
          <li><strong>Subjective Interpretation:</strong> Inconsistent rule applications.</li>
          <li><strong>Lack of Independent Oversight:</strong> Impartiality concerns due to inadequate mechanisms.</li>
          <li><strong>Limited Scope:</strong> Restricts the types of grievances addressed.</li>
          <li><strong>Non-Standardized Procedures:</strong> Leads to inefficiencies and delays.</li>
        </ul>
      </section>

      <section className="features-section">
        <h2>Features of an Enhanced GRS</h2>
        <article>
          <h3>AI-Powered Complaint Categorization</h3>
          <ul>
            <li><strong>Faster Resolution:</strong> Directs complaints to the appropriate departments.</li>
            <li><strong>Improved Accuracy:</strong> Effectively identifies root causes.</li>
            <li><strong>Data-Driven Insights:</strong> Highlights systemic issues for proactive action.</li>
          </ul>
        </article>

        <article>
          <h3>Multilingual AI Chatbot</h3>
          <ul>
            <li><strong>Accessibility:</strong> Allows users to interact in their preferred language.</li>
            <li><strong>24/7 Availability:</strong> Immediate assistance anytime, anywhere.</li>
            <li><strong>Personalized Support:</strong> Offers tailored solutions to user needs.</li>
          </ul>
        </article>

        <article>
          <h3>Feedback Mechanisms</h3>
          <ul>
            <li><strong>Continuous Improvement:</strong> Helps enhance system capabilities.</li>
            <li><strong>User Satisfaction:</strong> Demonstrates commitment to resolving issues.</li>
            <li><strong>Strategic Enhancements:</strong> Guides policy decisions and improvements.</li>
          </ul>
        </article>
      </section>

      <section className="implementation-section">
        <h2>Implementation Considerations</h2>
        <ul>
          <li><strong>Robust AI Infrastructure:</strong> Ensures accurate and efficient processing.</li>
          <li><strong>Language Model Adaptability:</strong> Handles multilingual and culturally nuanced interactions.</li>
          <li><strong>User-Friendly Interface:</strong> Simplifies access for all users.</li>
          <li><strong>Data Privacy and Security:</strong> Prioritizes the protection of user data.</li>
          <li><strong>Human Oversight:</strong> Maintains empathy and quality in resolutions.</li>
        </ul>
      </section>

      <section className="additional-features">
        <h2>Additional Features</h2>
        <ul>
          <li><strong>Real-Time Tracking:</strong> Enables users to monitor complaint statuses.</li>
          <li><strong>Transparent Communication:</strong> Provides regular updates to users.</li>
          <li><strong>Ombudsman Role:</strong> Ensures fairness and oversight in grievance handling.</li>
        </ul>
      </section>
    </div>

    <footer className="grs-footer text-center">
      <p>Government of India &copy; 2024 | All Rights Reserved</p>
    </footer>
  </div>
</section>


      <Chatbot />
      <footer>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Contact Support</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default GovernmentLoginPage;
