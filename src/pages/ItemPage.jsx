import { useOutletContext, useParams } from "react-router-dom";
import useItemStore from "../stores/useItemStore";
import { useEffect, useState } from "react";
import PageBar from "../components/PageBar";

import starIcon from "/img/starIcon.png";
import defaultImage from "/img/default.jpeg";
import CatagoryList from "../components/CatagoryList";

const ItemPage = () => {
  const {
    length,
    setLength,
    itemPerPage,
    setItemPerPage,
    pageNumber,
    setPageNumber,
  } = useOutletContext();

  const itemStore = useItemStore();

  const params = useParams();

  const [item, setItem] = useState(null);

  const [quantity, setQuantity] = useState(1);

  const [imgSRC, setImgSRC] = useState(null);

  useEffect(() => {
    setItem(itemStore.items.find((temp) => temp.id == params.id));
  }, [itemStore.items, params.id]);

  useEffect(() => {
    !item ? null : setImgSRC(item.imageLocation)
  }, [item]);

  return (
    <div className="h-full w-full flex flex-col items-center p-2">
      <div className="container mx-auto grid-cols-1 rounded-lg p-4 bg-white">
        {item == null ? (
          <div className="h-full w-full p-4">Loading...</div>
        ) : (
          <div className="w-full h-full flex flex-col justify-start gap-2 sm:gap-3 md:gap-4">
            <div className="h-full w-full flex flex-col justify-start md:flex-row md:items-center bg-[#DBE2EF] rounded-lg gap-4 p-5">
              <div className="bg-white flex flex-row items-center justify-center h-60 rounded-lg md:h-full md:min-w-[28%] md:aspect-square md:bg-[#DBE2EF] md:p-5">
                <img
                  src={imgSRC}
                  onError={() => setImgSRC(defaultImage)}
                  alt="Product Image"
                  className="h-full w-auto object-contain rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold text-[#3F72AF]">
                    {item.name}
                  </h1>

                  <div className="flex flex-row justify-between items-center gap-2 lg:flex-col lg:items-start">
                    <h1 className="text-lg font-semibold text-[#3F72AF]">
                      {item.price} tk
                    </h1>
                    <div className="flex flex-row gap-2">
                      {Array.from({ length: item.review }).map((_, index) => {
                        return (
                          <img
                            src={starIcon}
                            alt=""
                            key={index}
                            className="size-5"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-fit">
                  <button className="border border-green-500 w-fit p-2.5 text-green-500 bg-white">
                    Available In-Stock
                  </button>
                  <div className="flex flex-row gap-2">
                    <button className="border border-[#3F72AF] w-fit p-2.5 text-[#3F72AF] bg-white">
                      Base Variant
                    </button>
                    <button className="border border-[#3F72AF] w-fit p-2.5 text-[#3F72AF] bg-white">
                      US Variant
                    </button>
                  </div>
                  <button className="border border-[#3F72AF] w-fit p-2.5 text-[#3F72AF] bg-white">
                    Official
                  </button>
                </div>

                <div className="w-full flex flex-row items-center gap-4 sm:flex-col sm:items-start">
                  <div className="flex flex-col gap-2 w-2/5 sm:flex-row sm:items-center">
                    <div className="flex flex-row items-center gap-2">
                      <label htmlFor="quantity">Quantity:</label>
                      <input
                        value={quantity}
                        type="number"
                        name="quantity"
                        id="quantity"
                        className="border size-8 text-center rounded-md bg-white w-[3rem]"
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>

                    <div>
                      <h1 className="text-nowrap ">
                        Total Price:
                        <span className="text-[#3F72AF] font-semibold">
                          {quantity > 0 ? item.price * quantity : 0}tk
                        </span>
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 w-3/5">
                    <button
                      className={`self-start w-full max-w-[18rem] rounded-lg text-white py-2 px-3 ${
                        quantity > 0
                          ? "bg-[#3F72AF] hover:bg-[#6090ca]"
                          : "bg-gray-500"
                      }`}
                    >
                      Add to Cart
                    </button>
                    <button className="self-start w-full max-w-[18rem] bg-red-500 rounded-lg text-white py-2 px-3 hover:bg-red-400">
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col bg-[#DBE2EF] rounded-lg p-5">
              <h1 className="text-lg font-medium text-[#3F72AF]">
                Description:
              </h1>
              <p className="text-md">{item.description}</p>
            </div>

            <div className="h-fit flex flex-col gap-2 bg-[#DBE2EF] rounded-lg p-3 md:p-5">
              <h1 className="text-[#3F72AF] font-semibold ml-2">
                Similar Products:
              </h1>

              <CatagoryList
                selectedCatagory={item.catagory}
                setLength={setLength}
                itemPerPage={itemPerPage}
                setItemPerPage={setItemPerPage}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                itemSelected={item}
              />

              <PageBar
                length={length}
                itemPerPage={itemPerPage}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemPage;
