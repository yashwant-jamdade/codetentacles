import React, { useEffect, useState } from "react";
import Select from "react-select";
import UserServices from "../../services/UserService";
const CountryDetails = ({ addressData, setAddressData, errors }) => {
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();

  const handleCountrySelected = (selected) => {
    setSelectedCountry(selected);
  };
  const handleStateSelected = (selected) => {
    setSelectedState(selected);
  };

  const validateSelected = () => {
    if (selectedCountry && selectedState) {
      setAddressData({
        ...addressData,
        countryId: selectedCountry?.value,
        stateId: selectedState?.value,
      });
    }
  };

  useEffect(() => {
    UserServices?.getCountryList()?.then(async (res) => {
      let response = await res?.data?.data;
      let newResponse = response?.map((obj) => {
        return { value: obj.countryId, label: obj.countryName };
      });
      setCountryList(newResponse);
    });

    UserServices?.getStateList(`countryId=${selectedCountry?.value}`)
      .then(async (res) => {
        let response = await res?.data?.data;
        let newResponse = response?.map((obj) => {
          return { value: obj?.stateId, label: obj?.stateName };
        });
        setStateList(newResponse);
      })
      .catch((err) => {
        console.log("err state api", err);
      });
    validateSelected();
  }, [selectedCountry, selectedState]);

  return (
    <>
      <div className="flex   w-full p-2 ">
        <div className=" w-full">
          <h1 className="block text-left w-full text-gray-800 text-2xl font-bold mb-6">
            Details
          </h1>
          <form action="/" method="post">
            <div className=" grid gap-2 md:grid-cols-2">
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-700 text-left"
                  for="firstName"
                >
                  Select Country
                </label>
                <Select
                  className="basic-single text-left text-sm text-gray-700  rounded border border-gray-200"
                  classNamePrefix="select"
                  options={countryList}
                  onChange={handleCountrySelected}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium  text-gray-700 text-left"
                  for="firstName"
                >
                  Select State
                </label>
                <Select
                  className="basic-single text-left text-sm rounded text-gray-700 border border-gray-200"
                  classNamePrefix="select"
                  options={stateList}
                  onChange={handleStateSelected}
                  errors={errors?.state}
                  helperText={errors?.state}
                  aria-errormessage={errors?.state}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CountryDetails;
