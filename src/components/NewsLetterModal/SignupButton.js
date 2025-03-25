const SignupButton = () => {
  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-center w-full flex-col">
        <div className="flex flex-col gap-4">
          <input type="hidden" className="hidden" />

          <a
            className="hover:cursor-pointer flex justify-center underline text-our-red"
            href="https://2023tedxntua.us21.list-manage.com/subscribe?u=8fb93651f7aa4956e92c4f188&id=1473802836"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="lg:ml-2 w-[150px] mt-4 shadow focus:shadow-outline focus:outline-none text-center bg-our-red justify-center py-2 px-4 rounded flex text-white font-bold 4xl:mt-8 4xl:text-xl 4xl:w-[180px] 4xl:py-4 4xl:px-16 4xl:rounded-lg"
              type="button"
            >
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignupButton;
