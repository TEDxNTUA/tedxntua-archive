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

  const subscribe = async () => {
    setState("Loading");
    setErrorMessage(null);
    try {
      const response = await axios.post("api/newsletter", {
        name,
        surname,
        email,
      });
      setState("Success");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("Error");
    }
  };

  return (
    <section ref={ref} className="flex flex-col">
      <div className="flex items-center justify-center">
        <form
          //   onSubmit={submitForm}
          method="POST"
          acceptCharset="UTF-8"
          className="flex w-full flex-col"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-8 lg:flex-row">
              <label
                htmlFor="email"
                className="block mb-[0.15rem] pl-1 text-black text-left font-medium"
              >
                Email Address*
              </label>
              <input
                className="appearance-none mb-2 lg:mb-0 w-full lg:w-2/3 border border-gray-500 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-600"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-8 lg:flex-row">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-[0.15rem] pl-1 text-black text-left font-medium"
                >
                  Name*
                </label>
                <div className="relative flex items-center">
                  <input
                    className="appearance-none mb-2 lg:mb-0 w-full lg:w-2/3 border border-gray-500 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-600"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="surname"
                  className="block mb-[0.15rem] pl-1 text-black text-left font-medium"
                >
                  Surname*
                </label>
                <input
                  className="appearance-none mb-2 lg:mb-0 w-full lg:w-2/3 border border-gray-500 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-600"
                  type="text"
                  placeholder="Surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
            </div>

            {/* For Spambots */}
            <input type="hidden" className="hidden" />

            <button
              className={`lg:ml-2 w-full lg:w-1/3 shadow bg-brand2 focus:shadow-outline focus:outline-none text-center text-white font-bold py-2 px-4 rounded flex ${
                state === "Loading" ? "button-gradient-loading" : ""
              }`}
              type="button"
              disabled={state === "Loading"}
              onClick={subscribe}
            >
              Subscribe
            </button>
            {state === "Error" && <p>Error</p>}
            {state === "Success" && <p>Success</p>}
            {/* <SubmitButton disableButton={disableButton} />
            <FetchMessage
              success={successFetch}
              pending={disableButton}
              isInitial={isInitial}
            /> */}
          </div>
        </form>
      </div>
    </section>
  );
});

export default InputForm2;
