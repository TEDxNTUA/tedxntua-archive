function SubmitButton({ disableButton }) {
  return (
    <button
      disabled={disableButton}
      type="submit"
      className={`w-[40%] mx-auto rounded-lg mt-12 bg-our-red px-8 py-3 text-center font-semibold text-white ${
        disableButton
          ? "opacity-75 focus:outline-none"
          : "transition duration-10 ease-in-out hover:bg-[#dc0227]  focus:outline-slate-900"
      }`}
    >
      SIGN UP
    </button>
  );
}

export default SubmitButton;
