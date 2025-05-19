import { useNavigate } from "react-router-dom";

const GoBackBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="p-2 font-medium text-[#3F72AF] hover:text-[#253b55] text-nowrap"
    >
      {`< Go Back`}
    </button>
  );
};

export default GoBackBtn;
