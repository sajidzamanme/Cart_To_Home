import { useNavigate } from "react-router-dom";
import useItemStore from "../stores/useItemStore";
import SlimItemCard from "./SlimItemCard";

const RemoveForm = ({ searchLine }) => {
  const itemStore = useItemStore();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center py-4 px-6 w-full">
      <div className="flex flex-col gap-3 w-[98%] max-w-[50rem] items-center">
        {itemStore.items.map((item) => {
          if (
            item.name.toLowerCase().includes(searchLine) ||
            item.catagory.toLowerCase().includes(searchLine)
          ) {
            return <SlimItemCard key={item.id} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default RemoveForm;
