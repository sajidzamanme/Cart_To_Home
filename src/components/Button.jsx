const Button = ({ label = "Button", classList = "px-4 py-2" }) => {
  return (
    <div className={`bg-yellow-300 rounded-lg cursor-pointer hover:bg-yellow-400 ${classList}`}>
      <h1 className="text-[0.8rem]">{label}</h1>
    </div>
  );
};

export default Button;
