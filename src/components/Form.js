import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];


  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                if(page === 0 && formData.password !== formData.confirmPassword){
                  alert("Passwords do not match")
                  return
                };
                if(page === 0 && formData.password.length < 8){
                  alert("Password must be at least 8 characters")
                  return
                };
                if(page === 1 && formData.firstName.length < 1){
                    alert("First name cannot be blank")
                    return
                    };
                if(page === 1 && formData.lastName.length < 1){
                    alert("Last name cannot be blank")
                    return
                    };
                if(page === 1 && formData.username.length < 1){
                    alert("Username cannot be blank")
                    return
                    };
                if(page === 0 && formData.email.length < 1){
                    alert("Email cannot be blank")
                    return
                    };
                if(page === 0 && formData.password.length < 1){
                    alert("Password cannot be blank")
                    return
                    };
                if(page === 0 && formData.confirmPassword.length < 1){
                    alert("Confirm Password cannot be blank")
                    return
                    };
                if(page === 0 && formData.email.includes("@") === false){
                    alert("Email must be in correct format")
                    return
                    }
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;