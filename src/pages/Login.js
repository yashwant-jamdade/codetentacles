import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <>
            <section className="border-red-500  min-h-screen flex items-center justify-center bg-img">
                <div className="container mx-auto">
                    <div className="flex justify-center px-6 my-12">
                        <div className="w-1/3 flex">
                            <div className="w-full bg-white p-5 rounded-lg">
                                <div className="heading-1">
                                <h3 className="pt-4 font-bold text-4xl text-center text-purple-500">Login</h3>
                                </div>
                                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                  <div className="mb-4">
                                      <label className="block mb-2 text-sm font-medium text-gray-700 text-left" for="email">
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="mb-4 md:mr-2 ">
                                       <label className="block mb-2 text-sm font-medium text-left text-gray-700" for="password">
                                            Password
                                        </label> 
                                        <input
                                            className="w-full px-3 py-3  text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="mb-6 text-center">
                                        <a href="/Dashboard"
                                            className="w-full px-4 py-3 font-bold text-white rounded-lg bg-btn focus:outline-none focus:shadow-outline"
                                            type="button"> Login
                                            <div className="fill-one"></div>
                                        </a>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <Link
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            to="#"
                                        > Don't have an account? Register!
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}