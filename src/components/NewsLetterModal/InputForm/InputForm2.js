"use client";
import { forwardRef, useState, useEffect } from "react";

import NameInput from "./NameInput";
import SurnameInput from "./SurnameInput";
import EmailInput from "./EmailInput";
// import SubmitButton from "./SubmitButton";
// import FetchMessage from "./FetchMessage";

// import { checkName, checkEmail } from "../../../../lib/formValidation";
// import { fetchData } from "../../../../lib/fetchData";
import axios from "axios";

const InputForm2 = forwardRef((props, ref) => {
  // ALL THE BELOW IS FOR CLIENT SIDE VALIDATION
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const subscribe = async () => {
    setState("Loading");
    setErrorMessage(null);
    try {
      const response = await axios.post("api/newsletter", {
        name: name,
        surname: surname,
        email: email,
      });
      setState("Success");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("Error");
    }
  };

  useEffect(() => {
    // Update isButtonDisabled based on conditions
    setIsButtonDisabled(email === "" || name === "" || surname === "");
  }, [state, email, name, surname]);

  return (
    <section ref={ref} className="flex flex-col">
      <div className="flex items-center justify-center">
        <form
          method="POST"
          acceptCharset="UTF-8"
          className="flex w-full flex-col"
        >
          <div className="flex flex-col gap-4">
            <div className="email-input flex flex-col gap-1">
              <label
                htmlFor="email"
                className="block pl-1 text-black text-left font-medium 4xl:text-xl"
              >
                Email Address*
              </label>
              <input
                className="appearance-none w-full border border-gray-500 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-600 4xl:text-xl"
                type="text"
                placeholder="Email Address"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row">
              <div className="name-input flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="block pl-1 text-black text-left font-medium 4xl:text-xl"
                >
                  Name*
                </label>
                <div className="relative flex items-center">
                  <input
                    className="appearance-none mb-2 lg:mb-0 w-full border border-gray-500 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-6004 4xl:text-xl"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="surname-input flex flex-col gap-1">
                <label
                  htmlFor="surname"
                  className="block pl-1 text-black text-left font-medium 4xl:text-xl"
                >
                  Surname*
                </label>
                <input
                  className="appearance-none lg:mb-0 w-full border border-gray-500 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-600 4xl:text-xl"
                  type="text"
                  placeholder="Surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
            </div>

            {/* For Spambots */}
            <input type="hidden" className="hidden" />
            <div className="flex justify-center">
              <button
                className={`lg:ml-2 w-[150px] mt-4 shadow focus:shadow-outline focus:outline-none text-center bg-our-red justify-center py-2 px-4 rounded flex text-white font-bold 4xl:mt-8 4xl:text-xl 4xl:w-[180px] 4xl:py-4 4xl:px-16 4xl:rounded-lg ${
                  state === "Loading"
                    ? "button-gradient-loading cursor-wait"
                    : ""
                }
                ${isButtonDisabled ? "opacity-85 cursor-not-allowed" : ""}
                
                `}
                type="button"
                disabled={state === "Loading" || isButtonDisabled}
                onClick={subscribe}
              >
                Subscribe
              </button>
            </div>
            {state === "Error" && (
              <p className="text-red-500 font-bold">{errorMessage}</p>
            )}
            {state === "Success" && (
              <p className="text-green-500 font-bold">Success</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
});

export default InputForm2;
