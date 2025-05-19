import { useState } from "react";
import CustomBtn from "../components/CustomBtn";
import useItemStore from "../stores/useItemStore";
import { useNavigate } from "react-router-dom";
import GoBackBtn from "./GoBackBtn";

const AddForm = () => {
  const itemStore = useItemStore();

  const navigate = useNavigate();

  const [newItem, setNewItem] = useState({
    id:
      itemStore.items.length > 0
        ? Number(itemStore.items[itemStore.items.length - 1].id) + 1
        : 1,
    name: "",
    catagory: "",
    price: "",
    description: "",
    imageLocation: "",
    review: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    itemStore.setItems([...itemStore.items, newItem]);
    navigate("/admin-panel");
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full mt-12">
      <div className="flex flex-col items-start w-[23.5rem]">
        <GoBackBtn />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[23.5rem] gap-2.5 px-5 py-10 bg-[#DBE2EF] rounded-lg"
      >
        <h1 className="text-3xl self-center mb-4 font-medium">Add Item:</h1>
        <input
          value={newItem.name}
          type="text"
          placeholder="Item name"
          className="border rounded-md bg-[#F9F7F7] h-10 placeholder:pl-2"
          onChange={(e) =>
            setNewItem((prevState) => ({ ...prevState, name: e.target.value }))
          }
        />

        <select
          value={newItem.catagory}
          name="catagory"
          id="catagory"
          className="border rounded-md bg-[#F9F7F7] h-10 placeholder:pl-2"
          onChange={(e) =>
            setNewItem((prevState) => ({
              ...prevState,
              catagory: e.target.value,
            }))
          }
        >
          <option value="" disabled>
            Item Catagory
          </option>
          <option value="powerbank">Power Bank</option>
          <option value="mouse">Mouse</option>
          <option value="keyboard">Keyboard</option>
          <option value="mousepad">Mousepad</option>
          <option value="headphone">Headphone</option>
          <option value="cables">Cables</option>
        </select>

        <input
          value={newItem.price}
          type="number"
          placeholder="Item Price"
          className="border rounded-md bg-[#F9F7F7] h-10 placeholder:pl-2"
          onChange={(e) =>
            setNewItem((prevState) => ({
              ...prevState,
              price: "" ? "" : parseInt(e.target.value),
            }))
          }
        />

        <textarea
          value={newItem.description}
          placeholder="Item Description"
          className="border rounded-md bg-[#F9F7F7] h-30 placeholder:pl-2"
          onChange={(e) =>
            setNewItem((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
        ></textarea>
        <input
          value={newItem.imageLocation}
          type="text"
          placeholder="Item Image URL"
          className="border rounded-md bg-[#F9F7F7] h-10 placeholder:pl-2"
          onChange={(e) =>
            setNewItem((prevState) => ({
              ...prevState,
              imageLocation: e.target.value,
            }))
          }
        />
        <input
          value={newItem.review}
          type="number"
          placeholder="Item Review (0-5 stars)"
          className="border rounded-md bg-[#F9F7F7] h-10 placeholder:pl-2"
          onChange={(e) =>
            setNewItem((prevState) => ({
              ...prevState,
              review: "" ? "" : parseInt(e.target.value),
            }))
          }
        />

        <CustomBtn
          label="Add"
          bgCol="bg-[#F9F7F7]"
          hoverEffect="hover:bg-[#d3e8ff] hover:border-1 hover:border-white"
          classList="font-medium mt-3 w-3/5 self-center border-1 border-[#000000]"
        />
      </form>
    </div>
  );
};

export default AddForm;
