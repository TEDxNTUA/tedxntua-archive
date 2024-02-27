import EmailFailure from "./EmailFailure";
import InputMark from "./InputMark";

const EmailInput = ({ email, text, setEmail, isInitial, validation }) => {
  const { emailIsInitial, isEmpty, containsAt, endsWithDotCom, isBig, isOkay } =
    validation;

  const failure = (!isInitial || !emailIsInitial) & !isOkay;
  const success = (!isInitial || !emailIsInitial) & isOkay;

  return (
    <div className="relative">
      <label
        htmlFor="email"
        className="block mb-[0.15rem] pl-1 text-black text-left font-medium"
      >
        Email Address*
      </label>
      <div className="relative flex items-center">
        <input
          type="text"
          name={"email"}
          placeholder={text}
          value={email.toLowerCase()}
          onChange={(event) => setEmail(event.target.value)}
          className={`w-full rounded-md border-2 pt-2 pb-2 pl-2 pr-10 selection:bg-blue-200 focus:outline-none text-gray-800 ${
            failure ? "border-[#eb0028]" : null
          } ${success ? "border-green-500" : null} ${
            !failure && !success ? "focus:border-[#f7941c]" : null
          }`}
        />
        <div className="absolute right-0 flex items-center h-full pr-2">
          <InputMark failure={failure} success={success} />
        </div>
      </div>

      <EmailFailure
        isEmpty={isEmpty}
        containsAt={containsAt}
        endsWithDotCom={endsWithDotCom}
        isBig={isBig}
        failure={failure}
      />
    </div>
  );
};

export default EmailInput;
