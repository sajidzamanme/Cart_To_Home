import { useState } from "react";
import defaultImage from "/img/default.jpeg";

const ItemCard = ({ item }) => {
  const [imgSrc, setImageSrc] = useState(item.imageLocation);

  return (
    <div className="w-full border rounded-md">
      {/* Image */}
      <img
        src={imgSrc}
        onError={() => setImageSrc(defaultImage)}
        alt=""
        className="p-2 w-full h-auto aspect-[4/3] object-contain"
      />

      {/* Name & Details */}
      <div className="px-2 pb-1">
        <h1 className="font-semibold text-[#9d33ff]">{item.name}</h1>
        <div className="flex flex-row justify-between">
          <h1 className="font-medium text-[#9d33ff]">{item.price}</h1>
          <h1 className="text-[#9d33ff]">{item.review} stars</h1>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
