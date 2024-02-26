import { forwardRef, useState, useEffect } from "react";

import NameInput from "./NameInput";
import SurnameInput from "./SurnameInput";
import EmailInput from "./EmailInput";
import SubmitButton from "./SubmitButton";
import FetchMessage from "./FetchMessage";

import { checkName, checkEmail } from "../../../../lib/formValidation";
import { fetchData } from "../../../../lib/fetchData";

const InputForm = forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [nameIsInitial, setNameIsInitial] = useState(true);
  const [nameValidation, setNameValidation] = useState({
    isEmpty: true,
    isSmall: true,
    isBig: false,
    isOkay: false,
  });

  const [surname, setSurname] = useState("");
  const [surnameIsInitial, setSurnameIsInitial] = useState(true);
  const [surnameValidation, setSurnameValidation] = useState({
    isEmpty: true,
    isSmall: true,
    isBig: false,
    isOkay: false,
  });

  const [email, setEmail] = useState("");
  const [emailIsInitial, setEmailIsInitial] = useState(true);
  const [emailValidation, setEmailValidation] = useState({
    isEmpty: true,
    containsAt: false,
    endsWithDotCom: false,
    isBig: false,
    isOkay: false,
  });

  const [isInitial, setIsInitial] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [allowFetch, setAllowFetch] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [successFetch, setSuccessFetch] = useState(false);

  useEffect(() => {
    if (name.length === 0) {
      setNameIsInitial(true);
    } else {
      setNameValidation(checkName(name));
      setNameIsInitial(false);
    }
  }, [name]);

  useEffect(() => {
    if (surname.length === 0) {
      setSurnameIsInitial(true);
    } else {
      setSurnameValidation(checkName(surname));
      setSurnameIsInitial(false);
    }
  }, [surname]);

  useEffect(() => {
    if (email.length === 0) {
      setEmailIsInitial(true);
    } else {
      setEmailValidation(checkEmail(email));
      setEmailIsInitial(false);
    }
  }, [email]);

  const submitForm = (event) => {
    event.preventDefault();

    setNameValidation(checkName(name));
    setSurnameValidation(checkName(surname));
    setEmailValidation(checkEmail(email));

    setIsInitial(false);
    setButtonPressed(true);
  };

  useEffect(() => {
    if (
      buttonPressed &&
      nameValidation.isOkay &&
      surnameValidation.isOkay &&
      emailValidation.isOkay
    ) {
      setAllowFetch(true);
    } else {
      setAllowFetch(false);
      setSuccessFetch(false);
      setButtonPressed(false);
    }
  }, [buttonPressed, nameValidation, surnameValidation, emailValidation]);

  // useEffect(() => {
  //   if (allowFetch) {
  //     setDisableButton(true);

  //     // WORK WITH MAILCHIMP APIIIIIIIII
  //     fetchData(name, surname, email).then((success) => {
  //       setSuccessFetch(success);
  //       setDisableButton(false);
  //       if (success) {
  //         setName("");
  //         setSurname("");
  //         setEmail("");
  //         const timeout = setTimeout(() => {
  //           setIsInitial(true);
  //         }, 3000);
  //         return () => {
  //           clearTimeout(timeout);
  //         };
  //       }
  //     });
  //   }
  //   setButtonPressed(false);
  // }, [allowFetch]);

  return (
    <section ref={ref} className="flex flex-col">
      <div className="flex items-center justify-center">
        <form
          onSubmit={submitForm}
          method="POST"
          acceptCharset="UTF-8"
          className="flex w-full flex-col"
        >
          <div className="flex flex-col gap-4">
            <EmailInput
              email={email}
              text={"Email"}
              setEmail={setEmail}
              isInitial={isInitial}
              validation={{ emailIsInitial, ...emailValidation }}
            />
            <div className="flex flex-col gap-8 lg:flex-row">
              <NameInput
                name={name}
                text={"Name"}
                setName={setName}
                isInitial={isInitial}
                validation={{ nameIsInitial, ...nameValidation }}
              />
              <SurnameInput
                name={surname}
                text={"Surname"}
                setSurname={setSurname}
                isInitial={isInitial}
                validation={{ surnameIsInitial, ...surnameValidation }}
              />
            </div>

            {/* For Spambots */}
            <input type="hidden" className="hidden" />
            <SubmitButton disableButton={disableButton} />
            <FetchMessage
              success={successFetch}
              pending={disableButton}
              isInitial={isInitial}
            />
          </div>
        </form>
      </div>
    </section>
  );
});

export default InputForm;
