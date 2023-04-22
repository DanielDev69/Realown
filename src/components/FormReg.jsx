import React, { useState } from 'react'
import './FormReg.css'
import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router-dom';
import SignUp from './SignUp';
import Verification from './Verification';
import ContinueRegistration from './ContinueRegistration';
import Identity from './Identity'
import SurveyForm from './SurveyForm'
import ProfileRegistration from './ProfileRegistration'


const RegForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    verification: "",
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    address: "",
    city: "",
    state: "",
    zip: "",
    dateOfBirth: "",
    nationality: 0,
    frontNin: "",
    backNin: "",
    question: "",
    answer: "",
    fileUpload: "",
  })

  const FormTitles = ["Sign up", "Verification", "Continue Registration", 
  "Identity", "Survey Form", "Profile Registration"]

  const pageDisplay = () => {
    if (page === 0) {
      return <SignUp />
    }else if (page === 1) {
      return <Verification />
    }else if (page === 2) {
      return <ContinueRegistration />
    }else if (page === 3) {
      return <Identity />
    }else if (page === 4) {
      return <SurveyForm />
    }else{
      return <ProfileRegistration />
    }
  };

  return (
    <section>
      <div className="register">
        <div className="col-1"></div>
        <div className="col-2">
          <div className="progressbar"></div>
          <div className="form-container">
            <div className="header"></div>
            <div className="body">{pageDisplay()}</div>
            <div className="footer">
              <button 
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage -1);
                  }}
              >
                Prev
              </button>
              <button 
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert("FORM SUBMITTED");
                    //api comes in here
                  }else {
                    setPage((currPage) => currPage +1);
                  }
                }}
                >
                  {page === FormTitles.length -1 ? "Submit" : "Next"}
                </button>
              <div className='social'>
                <Link to="/">Google</Link>
                <Link to="/">Apple</Link>
                <Link to="/">Facebook</Link>
                <span>Already have an account?<Link to="/">Login</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegForm