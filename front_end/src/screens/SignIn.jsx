import "../styles/signUp.css";
import "../styles/signIn.css";
import SignUpHeader from "../components/SignUpHeader";
import SignUpInput from "../components/SignUpInput";
import { toast } from "react-toastify";
import backend_cnx from "../tools/backend_connection";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const redirect = () => {
    navigate("/Register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup_container sign_in_container">
      <form className="form_inputs" onSubmit={handleSubmit}>
        <SignUpHeader placeholder={"Sign In"} />

        <div className="row sign_in">
          <SignUpInput
            placeholder={"Email"}
            setFormData={setFormData}
            formData={formData}
          />
          <SignUpInput
            placeholder={"Password"}
            setFormData={setFormData}
            formData={formData}
          />
        </div>
        <div className="input_component submit sign_in">
          <input type="submit"></input>
          <p className="redirect" onClick={redirect}>
            Not a user? Sign up
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
