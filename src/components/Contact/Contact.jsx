import React from "react";
import "./Contact.css";
import { MdEmail, MdCall } from "react-icons/md";
import { GoLocation } from "react-icons/go";

function Contact() {
  //   const onSubmit = async (event) => {
  //     event.preventDefault();
  //     const formData = new FormData(event.target);

  //     formData.append("access_key", "87f845be-25d2-4433-bb80-98e484f69d");

  //     const object = Object.fromEntries(formData);
  //     const json = JSON.stringify(object);

  //     const res = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: json,
  //     }).then((res) => res.json());
  //     if (res.success) {
  //       console.log("Success", res);
  //     }
  //   };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <MdEmail className="icons" size={25} />{" "}
              <p>tinashemasiya00@gmail.com</p>
            </div>
            <div className="contact-detail">
              <MdCall className="icons" size={25} />{" "}
              <p>+263 77 548 8054 | +263 71 958 6897</p>
            </div>
            <div className="contact-detail">
              <GoLocation className="icons" size={25} /> <p>Harare Zimbabwe</p>
            </div>
          </div>
        </div>
        {/* onSubmit={onSubmit} */}
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter yoour name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter yoour email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message"></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
