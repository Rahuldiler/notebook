import React from "react";
import "../component/css/signup.css";
const SignUp = () => {
  return (
    <>
      <div id="formContainer">
        <form id="form" action="#" method="POST">
          <fieldset>
            <h1>Sign Up E-Com</h1>
            <div id="fullName">
              <input
              className="form-control"
                type="text"
                name="fName"
                id="fName"
                placeholder="First Name"
                required
              />
              <input
              className="form-control"
                type="text"
                name="lName"
                id="lName"
                placeholder="Last Name"
                required
              />
            </div>
            <div id="otherInputs">
              <input
              className="form-control"
                type="address"
                name="address"
                id="address"
                placeholder="Address"
                required
              />
              <input
              className="form-control"
                type="number"
                name="pincode"
                id="pincode"
                placeholder="Pincode"
                required
              />
              <input
              className="form-control"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Telephone Number"
                required
              />
              <input
              className="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
              />
            </div>
            <br />
            <br />
            <input
            className="form-control" type="submit" name="submit" id="submit" />
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default SignUp;
