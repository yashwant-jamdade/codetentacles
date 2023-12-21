import React, { useState } from "react";
import Personaldetails from "./stepperform/personaldetails";
import Countrydetails from "./stepperform/countrydetails";
import Skillsdetails from "./stepperform/skillsdetails";
import Credentaildetails from "./stepperform/credentaildetails";
import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";
import Layout from "../component/Layout";
import { Link } from "react-router-dom";
import UserServices from "../services/UserService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const steps = [
  "Personal Information",
  "Details",
  "Skills Details",
  "Credentail Details",
];

const Stepperform = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({
    userErrors: {},
    addressErrors: {},
    skillsErrors: {},
    credentailErrors: {},
  });
  const [userData, setUserData] = useState({
    profileImage: "",
    name: "",
    gender: 1,
    phone: 0,
  });
  const [addressData, setAddressData] = useState({
    countryId: null,
    stateId: null,
  });
  const [skillsData, setSkillsData] = useState([]);
  const [credentailData, setCredentailData] = useState({
    email: "",
    password: "",
  });
  const [mainState, setMainState] = useState({});

  const isUserValid = () => {
    const errors = {};
    if (!userData?.name) {
      errors.name = "Name is required & It should greater than 3";
    }

    if (!userData?.phone) {
      errors.phone = "Contact No length should be 10";
    }
    if (!userData?.gender) {
      errors.gender = "Please select Gender";
    }

    setErrors({ ...errors, userErrors: errors });
    return Object.keys(errors).length === 0;
  };

  const isAddressValid = () => {
    let errors = {};
    if (addressData?.countryId === null) {
      errors.country = "Please Select Country";
    }

    if (addressData?.stateId === null) {
      errors.state = "Please Select State";
    }

    setErrors({ ...errors, addressErrors: errors });
    return Object.keys(errors).length === 0;
  };

  const isSkillsValid = () => {
    const errors = {};
    if (skillsData.length === 0) {
      errors.skills = "Please Enter Your Skills";
    }

    setErrors({ ...errors, skillsErrors: errors });
    return Object.keys(errors).length === 0;
  };

  const isCredentailValid = () => {
    const errors = {};
    if (!credentailData.email) {
      errors.email = "Please Enter Valid Email Id";
    }

    if (!credentailData.password) {
      errors.password = "Please Enter Correct Password";
    }

    console.log("cred errors", errors);
    setErrors({ ...errors, credentailErrors: errors });
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (activeStep === 0 && isUserValid()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    if (activeStep === 1 && isAddressValid()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    if (activeStep === 2 && isSkillsValid()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    if (activeStep === 3 && isCredentailValid()) {
      console.log("IscredValid", isCredentailValid());
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setMainState({
        ...mainState,
        ...userData,
        ...addressData,
        skills: skillsData,
        ...credentailData,
      });
    }
  };

  const handleViewList = () => {
    UserServices?.createUser(mainState)
      .then((res) => {
        console.log("New User Res >>>", res?.data);
        toast.success("New User Created", 2000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("User Not Created", 2000);
      });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <Personaldetails
              userData={userData}
              setUserData={setUserData}
              errors={errors?.userErrors}
            />
          </>
        );
      case 1:
        return (
          <>
            <Countrydetails
              addressData={addressData}
              setAddressData={setAddressData}
              errors={errors?.addressErrors}
            />
          </>
        );
      case 2:
        return (
          <>
            <Skillsdetails
              skillsData={skillsData}
              setSkillsData={setSkillsData}
              errors={errors?.skillsErrors}
            />
          </>
        );
      case 3:
        return (
          <>
            <Credentaildetails
              credentailData={credentailData}
              setCredentailData={setCredentailData}
              errors={errors?.credentailErrors}
            />
          </>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Layout>
      <div className="bg-white p-4 mb-2 rounded-lg  dark:border-gray-700 mt-14">
        <div>
          <h3 class="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white text-left dark:hover:text-white text-[1.125rem] font-semibold">
            Stepper Form
          </h3>
        </div>
      </div>
      <div className="bg-white">
        <div className="p-4 rounded-lg dark:border-gray-700 mb-2">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
      <div className="bg-white">
        <div className="p-4 rounded-lg dark:border-gray-700">
          <>
            {activeStep === steps.length ? (
              <div className="flex justify-center  w-full mt-5">
                <div className=" p-8 m-4">
                  <Typography variant="h5" className="mt-10 mb-10 pb-10">
                    Thank you for submitting the form!
                  </Typography>
                  <Link
                    to="/list"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={handleViewList}
                  >
                    View List
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <Typography variant="h5">
                  {getStepContent(activeStep)}
                </Typography>
                <div className="flex justify-center">
                  <div className="flex justify-between w-full mt-4">
                    <Button
                      className="bg-back "
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </>
        </div>
      </div>
    </Layout>
  );
};

export default Stepperform;
