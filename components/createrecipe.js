import React, { useState } from "react";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import Spinner from "./spinner";

function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [loading, setLoading] = useState(false);
  const [destination, setDestination] = useState();
  const [fields, setFields] = useState(false);
  const [category, setCategory] = useState();
  const [imageAsset, setImageAsset] = useState();
  const [wrongImageType, setWrongImageType] = useState(false);
  const [user, setUser] = useState(false);
  const [ingredientModal, setIngredientModal] = useState(false);
  const [instructionModal, setInstructionModal] = useState(false);
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState([])

  console.log(ingredients)

  let images = [];

  let instructions = [];

  let categories = [
    "Recommended",
    "Top-Picks",
    "Asian",
    "Poultry",
    "Meat",
    "Middle-East",
    "Quick",
    "Cheap",
    "Noodles",
    "Vegan",
    "Beef",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Dessert",
    "Savory",
    "Spicy",
    "Non-Spicy",
  ];


  const savePin = () => {
    console.log("hi");
  };

  const uploadImage = () => {
    console.log("hi");
  };

  const submitIngredient = (e) => {
    e.preventDefault();
    if (!newIngredient) return;
    setIngredients([...ingredients, { id: Date.now(), text: newIngredient }]);
    setNewIngredient('');
  }

  const handleTodoDelete = (id) => { 
    setIngredients(ingredients.filter((ingredients) => ingredients.id !== id));
  }

  return (
    <div className="flex flex-col justify-center items-center lg:ml-20">
      {fields && (
        <p className="text-red-500 mb-5 text-xl transition-all duration-150 ease-in ">
          Please add all fields.
        </p>
      )}
      <div className=" flex flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-3/5 w-full mt-12">
        <h2 className="text-4xl font-bold mb-4">Create a Recipe 🥘 </h2>
        <h4 className="text-lg italic mb-4">Share your wonderful recipe to world!</h4>
        <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
          <div className=" flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420">
            {loading && <Spinner />}
            {wrongImageType && <p>It&apos;s wrong file type.</p>}
            {!imageAsset ? (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label className="cursor-pointer">
                <div className="flex flex-col items-center justify-center h-full ">
                  <div className="flex flex-col justify-center items-center">
                    <ArrowUpOnSquareIcon className="text-black h-8 w-8" />
                    <p className="text-lg">Click to upload</p>
                  </div>

                  <p className="mt-32 text-gray-400">
                    Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or
                    TIFF less than 20MB
                  </p>
                </div>
                <input
                  type="file"
                  name="upload-image"
                  onChange={uploadImage}
                  className="w-0 h-0"
                />
              </label>
            ) : (
              <div className="relative h-full">
                <img
                  src={imageAsset?.url}
                  alt="uploaded-pic"
                  className="h-full w-full"
                />
                <button
                  type="button"
                  className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                  onClick={() => setImageAsset(null)}
                >
                  <TrashIcon />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add your title"
            className="outline-none text-2xl sm:text-3xl font-bold border-b-2 border-gray-200 p-2"
          />
          {user && (
            <div className="flex gap-2 mt-2 mb-2 items-center bg-white rounded-lg ">
              <img
                src={user.image}
                className="w-10 h-10 rounded-full"
                alt="user-profile"
              />
              <p className="font-bold">{user.userName}</p>
            </div>
          )}
          <div>
            <p className="mb-2 font-semibold text:lg sm:text-xl">
              Choose Pin Category
            </p>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
            >
              <option value="others" className="sm:text-bg bg-white p-2">
                Select Category
              </option>
              {categories.map((item) => (
                <option
                  className="text-base border-0 outline-none text-black"
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex justify-between pr-4 items-center">
              <h2 className="font-bold text-2xl">Ingredients</h2>
              <PlusIcon
                className="h-8 w-8 lg:h-6 lg:w-6 mr-2 bg-black text-white rounded-lg"
                onClick={() => setIngredientModal(!ingredientModal)}
              />
            </div>
            {ingredientModal && (
              <div class="fixed z-5 top-0 left-0 w-full h-full bg-black bg-opacity-40">
                <div class="bg-white w-2/5 mx-auto mt-32 rounded-md border border-gray-300">
                  <span
                    class="text-gray-500 text-right text-2xl block cursor-pointer p-4"
                    onClick={() => setIngredientModal(!ingredientModal)}
                  >
                    ×
                  </span>
                  <div class="p-2 flex flex-col items-center justify-center">
                    <form onSubmit={(e) => submitIngredient(e)}>
                    <input className="w-full mb-4 p-2" type="text" placeholder="Type ingredient and quantity here!" value={newIngredient} onChange={(e) => setNewIngredient(e.target.value)}/>
                    <button className="bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none" type="submit">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            )}
            <div>
              {ingredients && ingredients.map((item) => (
                  <li className="cursor-pointer" key={item.id} onClick={() => handleTodoDelete(ingredients.id)}>
                    {item.text}
                  </li>
                )
              )}
            </div>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Instructions</h2>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-end items-end mt-5">
              <button
                type="button"
                onClick={savePin}
                className="bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none"
              >
                Save Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipe;
