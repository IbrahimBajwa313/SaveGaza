import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";

export default function UploadNews() {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState(null);
  const [subj, setSubj] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleFileBlur = () => {
    const fileInput = document.getElementById("dropzone-file");
    const label = document.getElementById("file-inp");
  
    if (!fileInput.files.length) {
      label.classList.add("border-red-500");
    } else {
      label.classList.remove("border-red-500");
    }
  };
  
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    const label = document.getElementById("file-inp");
    label.classList.remove("border-red-500");
  };
  

  const handleBlur = (event) => {
    const { id } = event.target;
  
    // For other input fields
    const inputElement = document.getElementById(id);
    if (!event.target.value.trim()) {
      inputElement.classList.add("border-red-500");
    }
  };
  
  const handleInput = (event) => {
    const { id } = event.target;
     const inputElement = document.getElementById(id);
  
    // Remove red border if the user starts typing
    inputElement.classList.remove("border-red-500");
  };
  

  const handleUpload = async () => {

    let isValid=true

    if(!file){
      const label = document.getElementById("file-inp");
      label.classList.add("border-red-500");
      isValid=false
    }

    if(!desc){
      const el = document.getElementById("floating_desc");
      el.classList.add("border-red-500");

      isValid=false
    }

    if(!subj){
      const el = document.getElementById("floating_subject");
      el.classList.add("border-red-500");
      
      isValid=false
    }

    if(!isValid)
      return;

    const formData = new FormData();
    formData.append("file", file); // Append the full file
    formData.append("desc", desc);
    formData.append("subj", subj);

    console.log("Form Data:", formData);
    setIsLoading(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`File uploaded successfully!`);
        setSuccess(true)
      } else {
        const errorData = await response.json();
        setMessage(`Upload failed!`);
        setSuccess(false)
      }
    } catch (error) {
      setMessage(`Upload error!`);
      setSuccess(false)
    } finally {
      setIsLoading(false);
      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 5000);
    }
  };

  return (
    <Wrapper className="bg-blue-50">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 text-center">
            <p className={`text-lg font-semibold ${success ? "text-green-600" : "text-red-600"}`}>
              {success ? (
               <div>
                 <i class="fa fa-check-circle text-green-500"></i> <span>{message}</span>
               </div>
              ) : (
                <div>
                  <i class="fa fa-times-circle text-green-500"></i> <span>{message}</span>
                </div>
              )
            }
            </p>
          </div>
        </div>
      )}

      <section className={`py-16 w-full ${(isLoading || showMessage) ? "opacity-50 blur-sm" : ""}`}>
        <div className="container w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black text-center">
              Admin Panel
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#22C55E] text-center">
              Email to Subscribers
            </h2>

            <form class="w-[70%] mx-auto">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  onBlur={handleBlur}
                    onInput={handleInput}
                  onChange={(e) => setSubj(e.target.value)}
                  name="floating_subject"
                  id="floating_subject"
                  className={`block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 appearance-none  border-gray-600 focus:border-[#22C55E] focus:outline-none focus:ring-0 peer`}
                  style={{ color: "black" }}
                  placeholder=" "
                  required
                />
                <label
                  for="floating_subject" id="subjLabel"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#22C55E] peer-focus:dark:text-[#22C55E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email Subject
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  onBlur={handleBlur}
                    onInput={handleInput}
                  onChange={(e) => setDesc(e.target.value)}
                  name="floating_desc"
                  id="floating_desc"
                  class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none border-gray-600 focus:border-[#22C55E] focus:outline-none focus:ring-0 peer"
                  style={{ color: "black" }}
                  placeholder=" "
                  required
                />
                <label
                id="descLabel"
                  for="floating_desc"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#22C55E] peer-focus:dark:text-[#22C55E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
                >
                  Email Description
                </label>
              </div>

              <div class="flex items-center justify-center w-full mb-5 z-0">
                <label
                  for="dropzone-file"
                  id="file-inp"
                  class="flex flex-col items-center justify-center w-full h-32 border-2 border-green-700 border-dashed rounded-lg cursor-pointer bg-green-300 hover:bg-green-400"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500">PDF, WORD</p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    onChange={handleFileChange}
                    class="hidden"
                  />
                </label>
              </div>

              {file && (
                <div className="my-5 text-center">
                    <p className="text-base">File uploaded: {file.name}</p>
                </div>
              )}

              <div
                onClick={handleUpload}
                class="w-1/4 cursor-pointer text-white bg-[#22C55E] hover:bg-[#D0312D] focus:ring-4 focus:outline-none focus:ring-[#22C55E] font-medium rounded-lg text-sm ml-auto px-5 py-2.5 text-center dark:bg-[#22C55E] dark:hover:bg-[#D0312D] dark:focus:ring-[#22C55E] transition duration-300"
              >
                Go
              </div>
            </form>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
