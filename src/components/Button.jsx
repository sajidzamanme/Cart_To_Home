const Button = ({ label="Button", classList="" }) => {
  return (
    <div>
      <div className={`bg-yellow-300 px-6 py-2 rounded-lg ${classList}`}>
        <h1>{label}</h1>
      </div>
    </div>
  );
};

export default Button;
