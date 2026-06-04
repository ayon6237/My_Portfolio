import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css'

const Contact = () => {
  const form = useRef();
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fwex7km", // replace
      "template_8comx1c", // replace
      form.current,
      "yqfHsm5QOXMPfxHrN" // replace
    )
    .then(
      (result) => {
        console.log(result.text);
        setSuccessMsg("Message sent successfully ✅");
        form.current.reset(); // clear form
      },
      (error) => {
        console.log(error.text);
        setSuccessMsg("Failed to send message ❌");
      }
    );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button className="contact-btn" type="submit">Send Message</button>
        </form>

        {successMsg && <p style={{ marginTop: "15px", color: "#38bdf8" }}>{successMsg}</p>}
      </div>

      <div className="contact-info">
    <p>Email: ayon6237@email.com</p>
    <p>GitHub: <a target="_blank" href="http://github.com/ayon6237">github.com/ayon6237</a></p>
  </div>
    </section>
  );
};

export default Contact;