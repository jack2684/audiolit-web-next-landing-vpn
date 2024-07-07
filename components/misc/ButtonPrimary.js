const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        addClass + " py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-200 hover:shadow-blue-md transition-all outline-none bg-white  "
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
