import React from "react";
export default function credentaildetails() {
    return (
        <>
            <div className="flex justify-center  w-full mt-5">
                <div className="w-3/4 bg-white rounded shadow-2xl rounded p-8 m-4">
                    <h1 className="block text-left w-full text-gray-800 text-2xl font-bold mb-6">Credenails Details</h1>
                    <form action="/" method="post">
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700 text-left" for="firstName">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="firstName"
                                type="email"
                                placeholder="Email" />
                        </div>
                        <div className="grid gap-2  md:grid-cols-2">
                            <div className="mb-4 ">
                                <label className="block mb-2 text-sm font-medium text-left text-gray-700" for="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-medium text-left text-gray-700 text-left" for="c_password">
                                    Confirm Password
                                </label>
                                <input
                                    className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="c_password"
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
