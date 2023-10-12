import "../styles/signUp.css";
import SignUpHeader from "../components/SignUpHeader";
import SignUpInput from "../components/SignUpInput";
import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backend_cnx from "../tools/backend_connection";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
    email: "",
    password: "",
  });
  const redirect = () => {
    navigate("/");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await backend_cnx.register(formData);
    if (response.status === 201) {
      toast.success("Success", {
        autoClose: 1000,
      });
      navigate("/");
    }
    console.log(response);
  };

  return (
    <div className="signup_container">
      <form className="form_inputs" onSubmit={handleSubmit}>
        <SignUpHeader placeholder={"Sign Up"} />
        <div className="row">
          <SignUpInput
            placeholder={"First Name"}
            setFormData={setFormData}
            formData={formData}
          />
          <SignUpInput
            placeholder={"Last Name"}
            setFormData={setFormData}
            formData={formData}
          />
        </div>
        <div className="row">
          <SignUpInput
            placeholder={"Birthday"}
            setFormData={setFormData}
            formData={formData}
          />
          <SignUpInput
            placeholder={"Gender"}
            setFormData={setFormData}
            formData={formData}
          />
        </div>
        <div className="row">
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
        <div className="input_component submit sign_up">
          <input type="submit"></input>
          <p className="redirect" onClick={redirect}>
            Already a user? Login
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
