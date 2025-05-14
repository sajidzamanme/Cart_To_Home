const PageBar = ({ length, itemPerPage, pageNumber, setPageNumber }) => {
  return (
    <div className="flex flex-row justify-center items-center w-full gap-4 col-span-2 sm:col-span-3 lg:col-span-4 xl:col-span-5">
      {Array.from({ length: Math.ceil(length / itemPerPage) }).map(
        (_, index) => {
          return (
            <button
              key={index}
              onClick={() => setPageNumber(index + 1)}
              className={`flex flex-row justify-center items-center w-8 h-8 cursor-pointer rounded-lg hover:bg-[#dddddd] ${
                pageNumber === index + 1 ? "font-bold text-[#9d33ff]" : ""
              }`}
            >
              {index + 1}
            </button>
          );
        }
      )}
    </div>
  );
};

export default PageBar;
