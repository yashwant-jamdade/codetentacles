import React from "react";
import Select from 'react-select'
export default function skillsdetails() {
    const skills = [
        { value: '1', label: 'Javascript' },
        { value: '2', label: 'React' },
        { value: '3', label: 'Angular' },
        { value: '4', label: 'HTML' },
        { value: '3', label: 'C' }
      ]
    return (
     <>
        <div className="flex justify-center  w-full mt-5">
                <div className="w-3/4 bg-white rounded shadow-2xl rounded p-8 m-4">
                    <h1 className="block text-left w-full text-gray-800 text-2xl font-bold mb-6">Details</h1>
                    <form action="/" method="post">
                      <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700 text-left" for="firstName">
                            Select Skills
                            </label>
                            <Select
                                  className="basic-single text-left text-sm"
                                  isMulti
                                  classNamePrefix="select"
                            options={skills} />
                        </div>
                     
                    </form>
                </div>
            </div>
            </>
    )
}
