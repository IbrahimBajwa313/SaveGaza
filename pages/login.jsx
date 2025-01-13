import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useUser } from "../context/UserContext";
import Cookies from "js-cookie";

const Login = () => {
  const { login } = useUser();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [wrongUsername, setWrongUsername] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const handleSubmit = async () => {
    let isValid = true;

    if (!username.trim()) {
      isValid = false;
      const el = document.getElementById("username");
      el.classList.add("border-red-500");
      setUsernameError(true);
    }

    if (!password.trim()) {
      isValid = false;
      const el = document.getElementById("password");
      el.classList.add("border-red-500");
      setPasswordError(true);
    }

    if (isValid) {
      const obj = {
        userName: username,
        password: password,
      };

      console.log(obj, "obj");

      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(obj),
        });

        const data = await response.json();

        if (response.ok) {
          const { username, role, userId } = data.data;

          // Store session data in cookies for 1 day
          Cookies.set("userSession", JSON.stringify({ username, role, userId }), { 
            expires: 1, 
            secure: true, 
            sameSite: "Strict" 
        });
        
          login({ userId, username, role });
          router.push("/admin/dashboard");
        } else {
          const { errorType, message } = data;

          if (errorType === "invalidUsername") {
            setWrongUsername(true);
            console.log("Invalid username");
          } else if (errorType === "invalidPassword") {
            setWrongPassword(true);
            console.log("Invalid password");
          } else {
            console.log("Error:", message);
            alert("An error occurred during login. Please try again.");
          }
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        alert(
          "A network error occurred. Please check your connection and try again."
        );
      }
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (event.target.value.trim() !== "") {
      setUsernameError(false);
      setWrongUsername(false);
      const el = document.getElementById("username");
      el.classList.remove("border-red-500");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value.trim() !== "") {
      setWrongPassword(false);
      setPasswordError(false);
      const el = document.getElementById("password");
      el.classList.remove("border-red-500");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1, y: -10 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 0, duration: 0.3, stiffness: 50 }}
      className="flex flex-col justify-center items-center h-screen bg-white"
    >
      <div className=" md:w-auto w-[90%] p-8 rounded-xl  m-4 flex flex-col items-center shadow-lg border border-gray-400 opacity-90 ">
        <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 ">
          <h1 className="font-semibold text-3xl text-black m-2">Log In</h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
          <div className="">
            <div className="m-1 text-lg text-black text-semibold">Username</div>
            <input
              type="text"
              id="username"
              onChange={handleUsernameChange}
              className="border-b border-black focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent mb-1"
            />
            {usernameError && (
              <div className="flex justify-start gap-2">
                <i
                  className="fas fa-exclamation-circle"
                  style={{ color: "red" }}
                ></i>
                <span className="text-sm text-red-600">
                  Username is required!
                </span>
              </div>
            )}
            {wrongUsername && (
              <div className="flex justify-start gap-2">
                <i
                  className="fas fa-exclamation-circle"
                  style={{ color: "red" }}
                ></i>
                <span className="text-sm text-red-600">Wrong Username!</span>
              </div>
            )}
          </div>
          <div className="">
            <div className="m-1 text-lg text-black text-semibold">Password</div>
            <input
              type="password"
              id="password"
              onChange={handlePasswordChange}
              className="border-b border-black focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent mb-1"
            />
            {passwordError && (
              <div className="flex justify-start gap-2">
                <i
                  className="fas fa-exclamation-circle"
                  style={{ color: "red" }}
                ></i>
                <span className="text-sm text-red-600">
                  Password is required!
                </span>
              </div>
            )}
            {wrongPassword && (
              <div className="flex justify-start gap-2">
                <i
                  className="fas fa-exclamation-circle"
                  style={{ color: "red" }}
                ></i>
                <span className="text-sm text-red-600">Wrong Password!</span>
              </div>
            )}
          </div>
        </div>
        <div className="text-center mt-7">
          <button
            onClick={handleSubmit}
            className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-full text-white bg-black  font-medium "
          >
            Login
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;