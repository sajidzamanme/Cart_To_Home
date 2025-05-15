import { useState } from "react";
import LoginBox from "../components/LoginBox";
import SignupBox from "../components/SignupBox";

const LoginPage = ({ setLoginState }) => {
  const [page, setPage] = useState("login");

  return (
    <div className="h-full w-full mt-16">
      {page === "login" ? (
        <LoginBox setPage={setPage} setLoginState={setLoginState} />
      ) : (
        <SignupBox setPage={setPage} />
      )}
    </div>
  );
};

export default LoginPage;
