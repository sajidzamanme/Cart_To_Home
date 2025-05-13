import { useEffect, useState } from "react";
import defaultImage from "/img/default.jpeg";
import starIcon from "/img/starIcon.png";

const ItemCard = ({ item }) => {
  const [imgSrc, setImageSrc] = useState(item.imageLocation);

  const showedName = (item.name.length > 22 ? item.name.slice(0, 17) + "..." : item.name);

  return (
    <div className="w-full border rounded-md hover:bg-[#dddddd]">
      {/* Image */}
      <img
        src={imgSrc}
        onError={() => setImageSrc(defaultImage)}
        alt=""
        className="p-2 w-full h-auto aspect-[4/3] object-contain"
      />

      {/* Name & Details */}
      <div className="px-2 pb-1">
        <h1 className="font-semibold text-[#9d33ff]">{showedName}</h1>
        <div className="flex flex-row justify-between">
          <h1 className="font-medium text-[#9d33ff]">{item.price}tk</h1>
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
