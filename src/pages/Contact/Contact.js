import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("Send");

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");

    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="main">
      <div className="sub-main">
        <div className="container">
          <h2 className="text-center">Contact Us</h2>
          <form onSubmit={onSubmit}>
            <div className="second-input">
              <label htmlFor="name">Name</label>
              <input className="c-input1" type="text" id="name" required />
            </div>
            <div className="second-input">
              <label htmlFor="email">Email</label>
              <input className="c-input2" type="email" id="email" required />
            </div>

            <div className="flex justify-center align-center text-center py-4 mx-2">
              <label htmlFor="message" className="message-label">
                Message
              </label>
              <textarea
                className="c-input3"
                id="message"
                required
                rows="3"
                cols="30"
                maxlength="200"
              />
            </div>
            <div>
              <button className="send-btn" type="submit">
                {formStatus}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
