import React from "react";
export default function personaldetails() {
    return (
        <>
            <div className="flex justify-center  w-full mt-5">
                <div className="w-3/4 bg-white rounded shadow-2xl rounded p-8 m-4">
                    <h1 className="block text-left w-full text-gray-800 text-2xl font-bold mb-6">Personal Details</h1>
                    <form action="/" method="post">
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700 text-left" for="firstName">
                                Name
                            </label>
                            <input
                                className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="firstName"
                                type="text"
                                placeholder="Name"
                            />
                        </div>
                        <div className=" grid gap-2 md:grid-cols-2">
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-medium text-gray-700 text-left" for="email">
                                    Profile Image
                                </label>
                                <input className="block w-full text-sm text-gray-700 border border-gray-300 rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 text-left" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-medium text-gray-700 text-left" for="email">
                                    Gender
                                </label>
                                <div className="grid grid-cols-4 gap-2">
                                    <div className="flex items-center mb-4">
                                        <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
