import { useOutletContext, useParams } from "react-router-dom";
import useItemStore from "../stores/useItemStore";
import { useEffect, useState } from "react";
import GoBackBtn from "../components/GoBackBtn";
import SideBar from "../components/SideBar";
import starIcon from "/img/starIcon.png";

const ItemPage = () => {
  const {
    selectedCatagory,
    setSelectedCatagory,
    loginState,
    adminState,
    onAdmin,
    setOnAdmin,
  } = useOutletContext();

  const itemStore = useItemStore();

  const params = useParams();

  console.log(params.id);

  const [item, setItem] = useState(null);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setItem(itemStore.items.find((temp) => temp.id == params.id));
  }, [itemStore.items, params.id]);

  console.log(item);

  return (
    <div className="grid grid-cols-2 w-full md:grid-cols-4 xl:grid-cols-5">
      {/* SideBar */}
      <div className="hidden h-full md:flex">
        <SideBar
          selectedCatagory={selectedCatagory}
          setSelectedCatagory={setSelectedCatagory}
          loginState={loginState}
          adminState={adminState}
          onAdmin={onAdmin}
          setOnAdmin={setOnAdmin}
        />
      </div>

      <div className="col-span-2 md:col-span-3 xl:col-span-4">
        <div className="h-full w-full flex flex-col items-center p-4">
          <div className="self-start">
            <GoBackBtn />
          </div>
          <div className="w-full max-w-[50rem] grid-cols-1 bg-[#DBE2EF] rounded-lg p-4 md:grid-cols-4">
            {item == null ? (
              <div className="h-full w-full p-4">Loading...</div>
            ) : (
              <div className="w-full h-full flex flex-col justify-start gap-4">
                <div className="bg-white flex flex-row items-center justify-center h-60">
                  <img
                    src={item.imageLocation}
                    alt="Product Image"
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-semibold text-[#3F72AF]">
                      {item.name}
                    </h1>

                    <div className="flex flex-row justify-between items-center">
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

                  <div className="flex flex-col">
                    <h1 className="text-lg font-medium text-[#3F72AF]">
                      Description:
                    </h1>
                    <p className="text-md">{item.description}</p>
                  </div>

                  <div className="w-full flex flex-row items-center py-4 gap-4 sm:flex-col sm:items-start">
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
                        <h1 className="text-nowrap">
                          Total Price: {item.price * quantity}tk
                        </h1>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-3/5 pr-3">
                      <button className="self-start w-full max-w-[18rem] bg-[#3F72AF] rounded-lg text-white py-2 px-3 hover:bg-[#6090ca]">
                        Add to Cart
                      </button>
                      <button className="self-start w-full max-w-[18rem] bg-red-500 rounded-lg text-white py-2 px-3 hover:bg-red-400">
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
