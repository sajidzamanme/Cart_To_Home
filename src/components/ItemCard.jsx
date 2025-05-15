import { useEffect, useState } from "react";
import defaultImage from "/img/default.jpeg";
import starIcon from "/img/starIcon.png";

const ItemCard = ({ item }) => {
  const [imgSrc, setImageSrc] = useState(item.imageLocation);

  const showedName =
    item.name.length > 17 ? item.name.slice(0, 17) + "..." : item.name;

  return (
    <div className="w-full rounded-md shadow-[0px_0px_10px_0.5px_rgb(199,224,255)] hover:bg-[#c7e0ff]">
      {/* Image */}
      <img
        src={imgSrc}
        onError={() => setImageSrc(defaultImage)}
        alt=""
        className="p-2 w-[90%] place-self-center h-auto my-[4%] aspect-[4/3] object-contain bg-white"
      />

      {/* Name & Details */}
      <div className="px-2 pb-1">
        <h1 className="font-semibold text-[#3F72AF]">{showedName}</h1>
        <div className="flex flex-row justify-between">
          <h1 className="font-medium text-[#3F72AF]">{item.price}tk</h1>
          <div className="flex flex-row gap-1">
            {Array.from({ length: item.review }).map((_, index) => {
              return (
                <img src={starIcon} alt="star" key={index} className="size-4" />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
