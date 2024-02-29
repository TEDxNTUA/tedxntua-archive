import SurnameFailure from "./SurnameFailure";
import InputMark from "./InputMark";

const SurnameInput = ({ surname, text, isInitial, validation, setSurname }) => {
  const { surnameIsInitial, isEmpty, isSmall, isBig, isOkay } = validation;

  const failure = (!isInitial || !surnameIsInitial) && !isOkay;
  const success = (!isInitial || !surnameIsInitial) && isOkay;

  return (
    <div className="relative">
      <label
        htmlFor="surname"
        className="block mb-[0.15rem] pl-1 text-black text-left font-medium"
      >
        Surname*
      </label>
      <div className="relative flex items-center">
        <input
          type="text"
          name={"surname"}
          placeholder={text}
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
          className={`w-full rounded-md border-2 bg-transparent pt-2 pb-2 pl-2 pr-10 selection:bg-blue-200 focus:outline-none text-gray-800 ${
            failure ? "border-our-red" : null
          } 
      ${success ? "border-green-500" : null} ${
            !failure && !success ? "focus:border-[#f7941c]" : null
          }`}
        />
        <div className="absolute right-0 flex items-center h-full pr-2">
          <InputMark failure={failure} success={success} />
        </div>
      </div>

      <SurnameFailure
        isEmpty={isEmpty}
        isSmall={isSmall}
        isBig={isBig}
        failure={failure}
      />
    </div>
  );
};

export default SurnameInput;
