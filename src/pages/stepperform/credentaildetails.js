import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

const CredentailDetails = ({ credentailData, setCredentailData, errors }) => {
  const [validatePassword, setValidatePassword] = useState();

  const handleEmailChange = (value) => {
    let emailMatch = value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (emailMatch ? true : false) {
      setCredentailData({
        ...credentailData,
        email: value,
      });
    }
  };

  const handlePasswordChange = (pass, confirm) => {
    if (pass == confirm) {
      setCredentailData({
        ...credentailData,
        password: pass,
      });
    }
  };

  return (
    <>
      <div className="flex   w-full p-2 ">
        <div className=" w-full">
          <h1 className="block text-left w-full text-gray-800 text-2xl font-bold mb-6">
            Credentails Details
          </h1>
          <form action="/" method="post">
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-700 text-left"
                for="firstName"
              >
                Email
              </label>
              <TextField
                className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="firstName"
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => handleEmailChange(e?.target?.value)}
                errors={errors?.email}
                helperText={errors?.email}
              />
            </div>

            <div className="grid gap-2  md:grid-cols-2">
              <div className="mb-4 ">
                <label
                  className="block mb-2 text-sm font-medium text-left text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <TextField
                  className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-200  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setValidatePassword(e?.target?.value)}
                  errors={errors?.password}
                  helperText={errors?.password}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-left text-gray-700 text-left"
                  for="c_password"
                >
                  Confirm Password
                </label>
                <TextField
                  className="w-full px-3 py-3 text-sm leading-tighttext-gray-700 border border-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="c_password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) =>
                    handlePasswordChange(e?.target?.value, validatePassword)
                  }
                  errors={errors?.password}
                  helperText={errors?.password}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CredentailDetails;
