import axios from "axios";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const LoginBox = ({ setPage }) => {
  const { setLoginState, setAdminState } = useOutletContext();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const onContinue = async () => {
    let flag = false;
    try {
      const response = await axios.get("/api/users.json");
      const loginInfo = response.data.users;

      loginInfo.map((info) => {
        if (info.username === name && info.password === pass) {
          setLoginState(true);
          console.log("Correct Credentials");
          flag = true;
          if (info.admin === true) setAdminState(true);
          navigate("/");
        }
      });
    } catch (error) {
      console.log("Error getting Login Infos", error);
    }
    if (flag === false) console.log("Wrong Credentials");
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex flex-col justify-start items-start bg-[#DBE2EF] gap-6 rounded-xl px-4 py-10">
        <h1 className="flex flex-row justify-center items-center w-full text-5xl text-[#3F72AF] font-medium">
          Login
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
              value={name}
              type="text"
              name="username"
              className="text-[#3F72AF] rounded-md bg-[#F9F7F7] h-8"
              onChange={(e) => setName(e.target.value)}
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
              value={pass}
              type="password"
              name="password"
              className="text-[#3F72AF] rounded-md bg-[#F9F7F7] h-8"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <h1 className="text-sm text-[#3F72AF] text-center self-center hover:text-[#112D4E]">
            Forgot Password
          </h1>

          <button
            onClick={onContinue}
            className="bg-[#F9F7F7] rounded-lg p-2 self-center text-center text-xl hover:bg-[#f0f7ff]"
          >
            Continue
          </button>

          <button
            onClick={() => setPage("signup")}
            className="text-sm text-[#3F72AF] self-center hover:text-[#112D4E]"
          >
            Don't have an account?
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
