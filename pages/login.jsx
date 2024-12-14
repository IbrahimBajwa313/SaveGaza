import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Login = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1, y: -10 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 0.3, stiffness: 50 }}
            className="flex flex-col bg-gray-900 justify-center items-center min-h-screen px-4"
        >
            <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-xl p-8 border border-gray-700">
                <h1 className="text-2xl font-semibold text-gray-200 text-center mb-6">
                    Login
                </h1>
                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            className="mt-1 block w-full border border-gray-600 bg-gray-700 rounded-md shadow-sm py-2 px-3 focus:ring-violet-500 focus:border-violet-500 sm:text-sm text-gray-300"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="mt-1 block w-full border border-gray-600 bg-gray-700 rounded-md shadow-sm py-2 px-3 focus:ring-violet-500 focus:border-violet-500 sm:text-sm text-gray-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-black text-white rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                        Login
                    </button>
                </form>
                
            </div>
        </motion.div>
    );
};

export default Login;
