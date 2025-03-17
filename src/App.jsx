
import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email.trim()) return setMessage("Email is required!");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setMessage("Invalid email!");

    try {
      const res = await fetch("https://test.ezworks.ai/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.status === 422) setMessage("Emails ending with @ez.works are not allowed!");
      else if (res.status === 200) setMessage("Form Submitted");
      else setMessage("Something went wrong!");
    } catch {
      setMessage("Network error!");
    }
  };

  return (
    <div className="container">
      <div className="left-content">
        <div className="imageez">
          <img src="/EZ Works Blue@2x.png" alt="EZ Works Logo" />
        </div>
        <div className="content">
          <h1>Suite Of Business Support Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...
          </p>
        </div>
        
      
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <button type="submit">Contact Me</button>
        </form>
        {message && <p>{message}</p>}
      </div>

    
      <div className="grid-container">
        {[
          { img: "/prsentation.jpg", title: "Presentation Design" },
          { img: "/audio.jpg", title: "Audio - Visual Production" },
          { img: "/translation.jpg", title: "Translation Services" },
          { img: "/graphic.jpg", title: "Graphic Design" },
          { img: "/research.jpg", title: "Research & Analytics" },
          { img: "/data.jpg", title: "Data Processing" }
        ].map((item, index) => (
          <div className="box" key={index}>
            <div className="box-header">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

