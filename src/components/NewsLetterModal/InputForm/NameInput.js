import NameFailure from "./NameFailure";
import InputMark from "./InputMark";

const NameInput = ({ name, text, isInitial, validation, setName }) => {
  const { nameIsInitial, isEmpty, isSmall, isBig, isOkay } = validation;

  const failure = (!isInitial || !nameIsInitial) && !isOkay;
  const success = (!isInitial || !nameIsInitial) && isOkay;

  return (
    <div className="relative">
      <label
        htmlFor="name"
        className="block mb-[0.15rem] pl-1 text-black text-left font-medium"
      >
        Name*
      </label>
      <div className="relative flex items-center">
        <input
          type="text"
          name={"name"}
          placeholder={text}
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={`w-full rounded-md border-2 bg-transparent pt-2 pb-2 pl-2 pr-10 selection:bg-white focus:outline-none text-gray-800 ${
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

      <NameFailure
        isEmpty={isEmpty}
        isSmall={isSmall}
        isBig={isBig}
        failure={failure}
      />
    </div>
  );
};

export default NameInput;
