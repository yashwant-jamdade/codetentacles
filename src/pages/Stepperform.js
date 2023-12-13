import React, { useState } from 'react';
import Header from "../component/Header";
import Sidebar from "../component/sidebar";
import Personaldetails from "./stepperform/personaldetails";
import Countrydetails from "./stepperform/countrydetails";
import Skillsdetails from "./stepperform/skillsdetails";
import Credentaildetails from "./stepperform/credentaildetails";
import { Stepper, Step, StepLabel, Button, Typography } from '@mui/material';

const steps = ['Personal Information', 'Details', 'Skills Details', "Credentail Details"];

export default function Stepperform() {
    const [activeStep, setActiveStep] = useState(0);


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <>
                        <Personaldetails />
                    </>
                );
            case 1:
                return (
                    <>
                        <Countrydetails />
                    </>
                );
            case 2:
                return (
                    <>
                        <Skillsdetails />
                    </>
                );
            case 3:
                return (
                    <>
                        <Credentaildetails />
                    </>
                );
            default:
                return 'Unknown step';
        }
    };

    return (
        <section>
            <Header />
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 rounded-lg dark:border-gray-700 mt-14">

                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <>
                        {activeStep === steps.length ? (
                            <div className="flex justify-center  w-full mt-5">
                                <div className="w-3/4 bg-white rounded shadow-2xl rounded p-8 m-4">
                                    <Typography variant="h5" className='mt-10'>Thank you for submitting the form!</Typography>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Typography variant="h5">{getStepContent(activeStep)}</Typography>
                                <div className='flex justify-center'>
                                    <div className='flex justify-between w-3/4 '>
                                        <Button  className="bg-back " disabled={activeStep === 0} onClick={handleBack}>
                                            Back
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                    </>

                </div>
            </div>
        </section>

    );
};


