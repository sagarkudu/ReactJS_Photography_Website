import React from "react";
import ContactButtons from "./ContactButtons";

import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fr2vqlm",
        "template_wes43gv",
        e.target,
        "user_htd8MwerNPiPftkaczcNZ",
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Oops!!! Email is not sent!");
        },
      );
    e.target.reset();
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>

        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto font-weight-bold">
              <ContactButtons />

              <form onSubmit={sendEmail}>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="user_name"
                    placeholder="enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    name="contact_number"
                    className="form-control"
                    id="phone"
                    placeholder="enter your number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Write a message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows="3"
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-outline-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * npm install emailjs-com
 */
