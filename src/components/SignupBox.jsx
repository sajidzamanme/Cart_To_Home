const SignupBox = ({ setPage }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex flex-col justify-start items-start bg-[#DBE2EF] gap-6 rounded-xl px-4 py-10">
        <h1 className="flex flex-row justify-center items-center w-full text-5xl text-[#3F72AF] font-medium">
          Signup
        </h1>
        <div className="flex flex-col gap-3 justify-center items-start">
          <div className="flex flex-row justify-start items-center">
            <label
              htmlFor="username"
              className="w-[5rem] text-[#3F72AF] font-medium"
            >
              Username:
            </label>
            <input
              type="text"
              name="username"
              className="text-[#3F72AF] rounded-md bg-[#F9F7F7] h-8"
            />
          </div>
          <div className="flex flex-row justify-start items-center">
            <label
              htmlFor="password"
              className="w-[5rem] text-[#3F72AF] font-medium"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              className="text-[#3F72AF] rounded-md bg-[#F9F7F7] h-8"
            />
          </div>

          <button className="bg-[#F9F7F7] rounded-lg p-2 self-center text-center text-xl hover:bg-[#f0f7ff]">
            Continue
          </button>

          <button
            onClick={() => setPage("login")}
            className="text-sm text-[#3F72AF] self-center hover:text-[#112D4E]"
          >
            Already have an account?
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupBox;
