import React, { useState } from "react";
import { Formik, Field } from "formik";
import TextField from "@mui/material/TextField";

const Personaldetails = ({ userData, setUserData, errors }) => {
  const [selectedImage, setSelectedImage] = useState();

  const handleImageChange = (e) => {
    const file = e?.target?.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex   w-full p-2 ">
        <div className=" w-full">
          <h1 className="block text-left w-full text-gray-500 text-2xl font-bold mb-6">
            Personal Details
          </h1>

          <Formik
            initialValues={{
              profileImage: "",
              name: "",
              gender: "",
              phone: "",
            }}
            validateOnChange={true}
            validate={(values) => {
              if (
                values.name.length > 3 &&
                values.phone.toString().length === 10 &&
                values.gender &&
                selectedImage
              ) {
                setUserData({
                  ...userData,
                  name: values.name,
                  phone: values.phone,
                  gender: values.gender,
                  profileImage: selectedImage,
                });
              }
            }}
          >
            {({
              handleChange,
              values,
              handleSubmit,
              touched,
              setFieldValue,
            }) => (
              <form action="/" method="post" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-700 text-left"
                    htmlFor="profile"
                  >
                    Profile Image
                  </label>
                  <div className="mt-1 flex flex-col items-start">
                    <span className="inline-block w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                      <img
                        src={selectedImage}
                        alt="profilepic"
                        className="w-100 h-100 m-auto rounded-full shadow"
                      />
                    </span>
                    <div className="flex  items-center justify-center bg-grey-lighter">
                      <label className="w-50 flex flex-col items-center px-4 py-2 mt-5 bg-blue-300 text-gray-700 rounded-lg shadow-lg tracking-wide  border border-blue cursor-pointer hover:bg-blue hover:text-white">
                        <span className=" text-base leading-normal">
                          Upload Image
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className=" grid gap-x-7 md:grid-cols-2">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-700 text-left"
                      htmlFor="firstName"
                    >
                      Name
                    </label>

                    <TextField
                      className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="Name"
                      onChange={handleChange}
                      value={values?.name}
                      name="name"
                      errors={errors?.name}
                      helperText={errors?.name}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-700 text-left"
                      for="email"
                    >
                      Gender
                    </label>
                    <div className="flex space-x-7">
                      <div className="flex items-center">
                        <Field
                          type="radio"
                          value={1}
                          name="gender"
                          checked={values.gender === 1}
                          onChange={() => setFieldValue("gender", 1)}
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Male
                        </label>
                      </div>
                      <div className="flex items-center">
                        <Field
                          type="radio"
                          value={2}
                          name="gender"
                          checked={values.gender === 2}
                          onChange={() => setFieldValue("gender", 2)}
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Female
                        </label>
                      </div>
                      <div className="flex items-center">
                        <Field
                          type="radio"
                          value={3}
                          name="gender"
                          checked={values.gender === 3}
                          onChange={() => setFieldValue("gender", 3)}
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Others
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" grid gap-x-7 md:grid-cols-2">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-700 text-left"
                      htmlFor="firstName"
                    >
                      Phone Numbers
                    </label>
                    <TextField
                      className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                      id="number"
                      type="number"
                      placeholder="Phone Number"
                      onChange={handleChange}
                      value={values?.phone}
                      name="phone"
                      errors={errors?.phone}
                      helperText={errors?.phone}
                    />
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Personaldetails;
